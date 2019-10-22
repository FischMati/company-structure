import React from "react";
import {useAsync} from "react-async";
import {fetchByManager} from "../API/Employees";
import Tree from "../Styles/Tree";
import EmployeeTree from "./EmployeeTree";

const EmployeeTreeView = () => {
    const { data } = useAsync(fetchByManager, { managerId: 0} );

    return (
        <Tree>
            <ul>
                { data && <EmployeeTree root={data[0]}/> }
            </ul>
        </Tree>
    );
};

export default EmployeeTreeView;
