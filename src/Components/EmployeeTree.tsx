import React from "react";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import EmployeeTreeitem from "./EmployeeTreeItem";

const EmployeeTree = () => {
    const { data, isPending } = useFetchEmployeesByManager(0);

    return (
            <>
                { !isPending && <EmployeeTreeitem employee={data[0]}/> }
            </>
    );
};

export default EmployeeTree;
