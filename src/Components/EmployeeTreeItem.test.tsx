import * as React from "react";

import {mount, shallow} from "enzyme";
import EmployeeFactory from "../Factories/EmployeeFactory";
import EmployeeTreeitem from "./EmployeeTreeItem";

jest.mock("../Hooks/useFetchEmployeesByManager");

describe("EmployeeTreeItem", () => {
    const employee = EmployeeFactory.build();

    it("renders without crashing", () => {
        shallow(<EmployeeTreeitem employee={employee}/>);
    });
});
