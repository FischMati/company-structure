import {mount} from "enzyme";
import {default as jest_fetch_mock, GlobalWithFetchMock} from "jest-fetch-mock";

export const waitForAsync = () => new Promise((resolve) => setImmediate(resolve));

export const updateAsync =
    async (mounted: any) => {
        await waitForAsync();
        mounted.update();
    };

export const mountAsync =
    async (component: any) => {
        const mounted = mount(component);

        await updateAsync(mounted);

        return mounted;
    };

export const clickButton =
    (mounted: any, at = 0) =>
        mounted.find("button").at(at).simulate("click");

export const clickButtonAsync =
    async (mounted: any, at = 0) => {
        clickButton(mounted, at);
        await updateAsync(mounted);
    };

export const mockFetch = () => {
    const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
    // @ts-ignore
    customGlobal.fetch = jest_fetch_mock;
    customGlobal.fetchMock = customGlobal.fetch;

    return {customGlobal, fetch: customGlobal.fetch};
};
