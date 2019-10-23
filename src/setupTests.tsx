import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

Enzyme.configure({adapter: new Adapter()});

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
