import * as Factory from "factory.ts";
import IEmployee from "../Interfaces/Employee";

const EmployeeFactory = Factory.Sync.makeFactory<IEmployee>({
   id: Factory.each((i) => i + 1),
   first: "TestEmp",
   last: "TestEmp",
   manager: 0,
});

export default EmployeeFactory;
