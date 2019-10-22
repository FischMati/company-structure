import React, {useState} from "react";
import useDeferredFetchEmployeesByManager from "../Hooks/useDeferredFetchEmployessByManager";
import IEmployee from "../Interfaces/Employee";
import Employee from "../Interfaces/Employee";
import EmployeeTreeitem from "./EmployeeTreeItem";

const toLeafs =
    (employees: Employee[]) =>
        employees.map(
            (employee: IEmployee) =>
                (<EmployeeTree root={employee}/>),
        );

const EmployeeTree = ({root}: {root: IEmployee}) => {
    const { id } = root;
    const { data: employees, isPending, run } = useDeferredFetchEmployeesByManager(id);
    const [isCollapsed, setCollapsed] = useState(true);

    const onRootClick = () => {
        const triggersFetch = !isCollapsed;

        setCollapsed(triggersFetch);

        if (!triggersFetch) {
            run();
        }
    };

    const leafs =
        employees &&
        employees.length > 0 &&
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

                {!isCollapsed && leafs}
            </li>
    );
};

export default EmployeeTree;
