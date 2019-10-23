import React, {useState} from "react";
import useDeferredFetchEmployeesByManager from "../Hooks/useDeferredFetchEmployessByManager";
import IEmployee from "../Interfaces/Employee";
import EmployeeTreeitem from "./EmployeeTreeItem";

interface IToLeafsParams {
    employees: IEmployee[];
    setError: (error: Error) => void;
}

const toLeafs =
    ({employees, setError}: IToLeafsParams) =>
        employees.map(
            (employee: IEmployee) =>
                (<EmployeeTree root={employee} setError={setError}/>),
        );

interface IProps {
    root: IEmployee;
    setError: (error: Error) => void;
}

const EmployeeTree = ({root, setError}: IProps) => {
    const { id } = root;
    const { data: employees, isPending, error, run } = useDeferredFetchEmployeesByManager(id);
    const [isCollapsed, setCollapsed] = useState(true);

    if (error) {
        setError(error);
    }

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
            {toLeafs({employees, setError})}
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
