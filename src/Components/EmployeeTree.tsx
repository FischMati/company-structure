import React, {useState} from "react";
import useDeferredFetchEmployeesByManager from "../Hooks/useDeferredFetchEmployessByManager";
import IEmployee from "../Interfaces/Employee";
import EmployeeTreeitem from "./EmployeeTreeItem";

const EmployeeTree = ({root}: {root: IEmployee}) => {
    const { id } = root;
    const { data, isPending, run } = useDeferredFetchEmployeesByManager(id);
    const [isCollapsed, setCollapsed] = useState(true);

    const fetchEmployees = () => {
        if (!isPending) {
            const newValue = !isCollapsed;

            setCollapsed(newValue);

            if (!newValue) {
                run();
            }
        }
    };

    const leafs =
        !isPending &&
        data &&
        data.length > 0 &&
        (<ul>
            {data.map((employee: IEmployee) =>
                (<EmployeeTree root={employee}/>),
            )}
        </ul>);

    return (
            <li>
                <EmployeeTreeitem employee={root} isPending={isPending} fetchEmployeesFn={fetchEmployees}/>
                {!isCollapsed && leafs}
            </li>
    );
};

export default EmployeeTree;
