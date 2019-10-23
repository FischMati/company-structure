import * as React from "react";

import {mount} from "enzyme";
import {default as jest_fetch_mock, GlobalWithFetchMock} from "jest-fetch-mock";
import EmployeeFactory from "../Factories/EmployeeFactory";
import {BASE_API} from "../routes";
import {mountAsync, waitForAsync} from "../setupTests";
import EmployeeTreeView from "./EmployeeTreeView";

describe("EmployeeTreeView", () => {
    const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
    // @ts-ignore
    customGlobal.fetch = jest_fetch_mock;
    customGlobal.fetchMock = customGlobal.fetch;

    it("calls fetch with manager 0 on render", async () => {
        mount(<EmployeeTreeView />);

        await waitForAsync();

        expect(customGlobal.fetch).toHaveBeenCalledWith(
            `${BASE_API}?manager=0`,
            jasmine.any(Object),
        );
    });

    it("only shows one node on render", async () => {
        customGlobal.fetch.mockResponseOnce(
            JSON.stringify([EmployeeFactory.build(), EmployeeFactory.build()]),
        );

        const mounted = await mountAsync(<EmployeeTreeView />);

        expect(mounted.find("button")).toHaveLength(1);
    });

    it("only shows first node on render", async () => {
        const firstEmployee = EmployeeFactory.build();

        customGlobal.fetch.mockResponseOnce(
            JSON.stringify([firstEmployee, EmployeeFactory.build({first: "test-no"})]),
        );

        const mounted = await mountAsync(<EmployeeTreeView />);

        expect(mounted.find("button").text()).toEqual(`${firstEmployee.first} ${firstEmployee.last}`);
    });
});
