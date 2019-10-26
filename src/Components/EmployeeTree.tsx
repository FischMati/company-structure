import React, {useEffect} from "react";
import useCollapse from "../Hooks/useCollapse";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import useNotifyStatus from "../Hooks/useNotifyStatus";
import IEmployee from "../Interfaces/Employee";
import NonRootTreeLevel from "../Styles/NonRootTreeLevel";
import TreeNode from "../Styles/TreeNode";
import EmployeeTreeitem from "./EmployeeTreeItem";

interface IToLeavesParams {
    employees: IEmployee[];
    onRejectedStatusChange: (isRejected: boolean) => void;
}

const toLeaves =
    ({employees, ...constantProps}: IToLeavesParams) =>
        employees.map(
            (employee: IEmployee) =>
                (<EmployeeTree root={employee} {...constantProps} />),
        );

interface IProps {
    root: IEmployee;
    onRejectedStatusChange: (isRejected: boolean) => void;
}

const EmployeeTree = ({root, onRejectedStatusChange}: IProps) => {
    const { id } = root;
    const {isCollapsed, setCollapsed, toggleCollapsed } = useCollapse();

    const {
        data: employees,
        isPending,
        isFulfilled,
        isRejected,
        run,
    } = useFetchEmployeesByManager(id, { defer: true });

    const onRootClick = () => {
        if (!toggleCollapsed()) {
            run();
        }
    };

    useNotifyStatus(onRejectedStatusChange, isRejected);

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
            {toLeaves({employees, onRejectedStatusChange})}
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
