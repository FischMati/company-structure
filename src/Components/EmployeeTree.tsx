import React, {useState} from "react";
import useDeferredFetchEmployeesByManager from "../Hooks/useDeferredFetchEmployessByManager";
import IEmployee from "../Interfaces/Employee";
import Employee from "../Interfaces/Employee";
import EmployeeTreeitem from "./EmployeeTreeItem";

interface IProps {
    root: IEmployee;
}

const toLeafs =
    (employees: Employee[]) =>
        employees.map(
            (employee: IEmployee) =>
                (<EmployeeTree root={employee}/>),
        );

const EmployeeTree = ({root}: IProps) => {
    const { id } = root;
    const { data: employees, isPending, run } = useDeferredFetchEmployeesByManager(id);
    const [isCollapsed, setCollapsed] = useState(true);

    const onRootClick = () => {
        const willCollapse = !isCollapsed;

        setCollapsed(willCollapse);

        if (!willCollapse) {
            run();
        }
    };

    const leafs =
        employees &&
        employees.length > 0 &&
        !isCollapsed &&
        (<ul>
            {toLeafs(employees)}
        </ul>);

    return (
            <li>
                <EmployeeTreeitem
                    employee={root}
                    isPending={isPending}
                    onClick={onRootClick}
                />

                {leafs}
            </li>
    );
};

export default EmployeeTree;
