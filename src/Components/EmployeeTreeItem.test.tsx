import * as React from "react";

import {mount} from "enzyme";
import EmployeeTreeItemPropsFactory from "../Factories/EmployeeTreeItemProps";
import EmployeeTreeitem from "./EmployeeTreeItem";

describe("EmployeeTreeItem", () => {
    const clickButton =
        (mounted: any) =>
            mounted.find("button").simulate("click");

    it("Renders a button with class sending if not pending", () => {
        const props = EmployeeTreeItemPropsFactory.build();

        const mounted = mount(<EmployeeTreeitem {...props} />);

        expect(mounted.find("button").hasClass("sending")).toBeFalsy();
    });

    it("Renders a button with class sending if pending", () => {
        const props = EmployeeTreeItemPropsFactory.build({isPending: true});

        const mounted = mount(<EmployeeTreeitem {...props} />);

        expect(mounted.find("button").hasClass("sending")).toBeTruthy();
    });

    it("Prevents onClick from working if pending", () => {
        const spy = jest.fn();
        const props = EmployeeTreeItemPropsFactory.build({isPending: true, onClick: spy});

        const mounted = mount(<EmployeeTreeitem {...props} />);

        clickButton(mounted);
        expect(spy).toHaveBeenCalledTimes(0);
    });

    it("Fires onClick if not pending", () => {
        const spy = jest.fn();
        const props = EmployeeTreeItemPropsFactory.build({onClick: spy});

        const mounted = mount(<EmployeeTreeitem {...props} />);

        clickButton(mounted);
        expect(spy).toHaveBeenCalled();
    });
});
