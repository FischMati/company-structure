import React, {useState} from "react";
import {FetchOptions} from "react-async";
import useDeferredFetchEmployeesByManager from "../Hooks/useDeferredFetchEmployessByManager";
import IEmployee from "../Interfaces/Employee";
import EmployeeTreeitem from "./EmployeeTreeItem";

interface IToLeafsParams {
    employees: IEmployee[];
    fetchOptions: FetchOptions<any>;
}

const toLeafs =
    ({employees, fetchOptions}: IToLeafsParams) =>
        employees.map(
            (employee: IEmployee) =>
                (<EmployeeTree root={employee} fetchOptions={fetchOptions}/>),
        );

interface IProps {
    root: IEmployee;
    fetchOptions: FetchOptions<any>;
}

const useCollapse = () => {
    const [isCollapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        const willCollapse = !isCollapsed;

        setCollapsed(willCollapse);

        return willCollapse;
    };

    return { isCollapsed, setCollapsed, toggleCollapsed };
};

const EmployeeTree = ({root, fetchOptions}: IProps) => {
    const { id } = root;
    const {isCollapsed, toggleCollapsed } = useCollapse();

    const {
        data: employees,
        isPending,
        run,
    } = useDeferredFetchEmployeesByManager(id, fetchOptions);

    const onRootClick = () => {
        if (!toggleCollapsed()) {
            run();
        }
    };

    const leafs =
        employees &&
        employees.length > 0 &&
        !isCollapsed &&
        (<ul>
            {toLeafs({employees, fetchOptions})}
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
