import * as Factory from "factory.ts";
import {IProps} from "../Components/EmployeeTreeItem";
import EmployeeFactory from "./EmployeeFactory";

const EmployeeTreeItemPropsFactory = Factory.Sync.makeFactory<IProps>({
   isPending: false,
   onClick: () => {},
   employee: EmployeeFactory.build(),
});

export default EmployeeTreeItemPropsFactory;
