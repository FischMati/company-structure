import React, {useEffect} from "react";
import {FetchOptions} from "react-async";
import useCollapse from "../Hooks/useCollapse";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import IEmployee from "../Interfaces/Employee";
import NonRootTreeLevel from "../Styles/NonRootTreeLevel";
import TreeNode from "../Styles/TreeNode";
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
    const {isCollapsed, setCollapsed, toggleCollapsed } = useCollapse();

    const {
        data: employees,
        isPending,
        isFulfilled,
        isRejected,
        run,
    } = useFetchEmployeesByManager(id, { defer: true, ...fetchOptions});

    const onRootClick = () => {
        if (!toggleCollapsed()) {
            run();
        }
    };

    useEffect(() => {
        const noEmployees = (employees && employees.length === 0);

        if (noEmployees || isRejected) {
            setCollapsed(true);
        }
    }, [employees, isRejected, setCollapsed]);

    const leaves =
        employees &&
        employees.length > 0 &&
        !isCollapsed &&
        isFulfilled &&
        (<NonRootTreeLevel>
            {toLeaves({employees, fetchOptions})}
        </NonRootTreeLevel>);

    return (
            <TreeNode>
                <EmployeeTreeitem
                    employee={root}
                    isPending={isPending}
                    onClick={onRootClick}
                />

                {leaves}
            </TreeNode>
    );
};

export default EmployeeTree;
