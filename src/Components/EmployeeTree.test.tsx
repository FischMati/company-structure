import * as React from "react";

import {mount} from "enzyme";
import {default as jest_fetch_mock, GlobalWithFetchMock} from "jest-fetch-mock";
import EmployeeFactory from "../Factories/EmployeeFactory";
import {BASE_API} from "../routes";
import {clickButton, clickButtonAsync, waitForAsync} from "../setupTests";
import EmployeeTree from "./EmployeeTree";

describe("EmployeeTreeView", () => {
    const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
    // @ts-ignore
    customGlobal.fetch = jest_fetch_mock;
    customGlobal.fetchMock = customGlobal.fetch;
    const rootEmployee = EmployeeFactory.build();

    it("calls fetch on button click", async () => {
        const mounted = mount(<EmployeeTree root={rootEmployee} />);
        clickButton(mounted);

        await waitForAsync();

        expect(customGlobal.fetch).toHaveBeenCalledWith(
            `${BASE_API}?manager=1`,
            jasmine.any(Object),
        );
    });

    it("shows one leaf per employee returned", async () => {
        const mounted = mount(<EmployeeTree root={rootEmployee} />);

        customGlobal.fetch.mockResponseOnce(
            JSON.stringify([EmployeeFactory.build(), EmployeeFactory.build(), EmployeeFactory.build()]),
        );

        await clickButtonAsync(mounted);

        expect(mounted.find("button")).toHaveLength(4);
    });

    it("collapses on second click", async () => {
        const mounted = mount(<EmployeeTree root={rootEmployee} />);

        customGlobal.fetch.mockResponseOnce(
            JSON.stringify([EmployeeFactory.build(), EmployeeFactory.build(), EmployeeFactory.build()]),
        );

        await clickButtonAsync(mounted);
        await clickButtonAsync(mounted);

        expect(mounted.find("button")).toHaveLength(1);
    });
});
