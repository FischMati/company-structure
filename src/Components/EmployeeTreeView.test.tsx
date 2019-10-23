import * as React from "react";

import {mount} from "enzyme";
import EmployeeFactory from "../Factories/EmployeeFactory";
import {BASE_API} from "../routes";
import {mockFetch, mountAsync} from "../test-utils";
import EmployeeTreeView from "./EmployeeTreeView";

describe("EmployeeTreeView", () => {
    const { fetch: fetchMock } = mockFetch();

    it("calls fetch with manager 0 on render", async () => {
        await mountAsync(<EmployeeTreeView />);

        expect(fetchMock).toHaveBeenCalledWith(
            `${BASE_API}?manager=0`,
            jasmine.any(Object),
        );
    });

    it("only shows one node on render", async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify([EmployeeFactory.build(), EmployeeFactory.build()]),
        );

        const mounted = await mountAsync(<EmployeeTreeView />);

        expect(mounted.find("button")).toHaveLength(1);
    });

    it("only shows first node on render", async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify([
                EmployeeFactory.build({first: "t1", last: "t2"}),
                EmployeeFactory.build({first: "t3", last: "t4"}),
            ]),
        );

        const mounted = await mountAsync(<EmployeeTreeView />);

        expect(mounted.find("button").text()).toEqual("t1 t2");
    });
});
