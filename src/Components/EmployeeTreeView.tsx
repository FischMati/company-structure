import React, {useState} from "react";
import Alert from "reactstrap/lib/Alert";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import Tree from "../Styles/Tree";
import EmployeeTree from "./EmployeeTree";

const useFetchError = () => {
    const [fetchError, setFetchError]: [Error | undefined, any] = useState(undefined);

    const fetchOptions = {
        onResolve: () => setFetchError(undefined),
        onReject: (error: Error) => {
            setFetchError(error);
        },
    };

    return { fetchError, fetchOptions };
};

const EmployeeTreeView = () => {
    const { fetchError: rootError, fetchOptions: rootFetchOptions } = useFetchError();
    const { fetchError: childError, fetchOptions: childFetchOptions } = useFetchError();

    const { data } = useFetchEmployeesByManager(0, rootFetchOptions);

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
