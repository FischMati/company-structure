import * as React from "react";

import {mount} from "enzyme";
import EmployeeFactory from "../Factories/EmployeeFactory";
import {BASE_API} from "../routes";
import {clickButtonAsync, mockFetch} from "../test-utils";
import EmployeeTree from "./EmployeeTree";

describe("EmployeeTreeView", () => {
    const { fetch: fetchMock } = mockFetch();
    const rootEmployee = EmployeeFactory.build();

    fetchMock.mockResponse(
        JSON.stringify([EmployeeFactory.build(), EmployeeFactory.build(), EmployeeFactory.build()]),
    );

    it("calls fetch on button click", async () => {
        const mounted = mount(<EmployeeTree root={rootEmployee} />);

        await clickButtonAsync(mounted);

        expect(fetchMock).toHaveBeenCalledWith(
            `${BASE_API}?manager=1`,
            jasmine.any(Object),
        );
    });

    it("shows one leaf per employee returned", async () => {
        const mounted = mount(<EmployeeTree root={rootEmployee} />);

        await clickButtonAsync(mounted);

        expect(mounted.find("button")).toHaveLength(4);
    });

    it("collapses on second click", async () => {
        const mounted = mount(<EmployeeTree root={rootEmployee} />);

        await clickButtonAsync(mounted);
        await clickButtonAsync(mounted);

        expect(mounted.find("button")).toHaveLength(1);
    });
});
