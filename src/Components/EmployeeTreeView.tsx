import React from "react";
import Alert from "reactstrap/lib/Alert";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import useFetchError from "../Hooks/useFetchError";
import Tree from "../Styles/Tree";
import EmployeeTree from "./EmployeeTree";

const EmployeeTreeView = () => {
    const { fetchError: childError, fetchOptions: childFetchOptions } = useFetchError();
    const { data, error: rootError } = useFetchEmployeesByManager(0);

    return (
        <>
            {
                (rootError || childError) &&
                    <Alert color="danger"> An unexpected error ocurred. Please try again later. </Alert>
            }

            <Tree>
                <ul>
                    { data && <EmployeeTree root={data[0]} fetchOptions={childFetchOptions}/> }
                </ul>
            </Tree>
        </>
    );
};

export default EmployeeTreeView;
