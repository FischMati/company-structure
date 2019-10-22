import React from "react";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import Tree from "../Styles/Tree";
import EmployeeTree from "./EmployeeTree";

const EmployeeTreeView = () => {
    const { data } = useFetchEmployeesByManager(0);

    return (
        <Tree>
            <ul>
                { data && <EmployeeTree root={data[0]}/> }
            </ul>
        </Tree>
    );
};

export default EmployeeTreeView;
