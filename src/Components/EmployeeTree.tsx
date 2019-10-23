import React from "react";
import {FetchOptions} from "react-async";
import useCollapse from "../Hooks/useCollapse";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import IEmployee from "../Interfaces/Employee";
import EmployeeTreeitem from "./EmployeeTreeItem";

interface IToLeavesParams {
    employees: IEmployee[];
    fetchOptions: FetchOptions<any>;
}

const toLeaves =
    ({employees, fetchOptions}: IToLeavesParams) =>
        employees.map(
            (employee: IEmployee) =>
                (<EmployeeTree root={employee} fetchOptions={fetchOptions}/>),
        );

interface IProps {
    root: IEmployee;
    fetchOptions: FetchOptions<any>;
}

const EmployeeTree = ({root, fetchOptions}: IProps) => {
    const { id } = root;
    const {isCollapsed, toggleCollapsed } = useCollapse();

    const {
        data: employees,
        isPending,
        run,
    } = useFetchEmployeesByManager(id, { defer: true, ...fetchOptions});

    const onRootClick = () => {
        if (!toggleCollapsed()) {
            run();
        }
    };

    const leaves =
        employees &&
        employees.length > 0 &&
        !isCollapsed &&
        !isPending &&
        (<ul>
            {toLeaves({employees, fetchOptions})}
        </ul>);

    return (
            <li>
                <EmployeeTreeitem
                    employee={root}
                    isPending={isPending}
                    onClick={onRootClick}
                />

                {leaves}
            </li>
    );
};

export default EmployeeTree;
