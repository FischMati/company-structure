import React, {useState} from "react";
import Alert from "reactstrap/lib/Alert";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import Tree from "../Styles/Tree";
import EmployeeTree from "./EmployeeTree";

const EmployeeTreeView = () => {
    const { data, error } = useFetchEmployeesByManager(0);
    const [childError, setChildError]: [Error | undefined, any] = useState(undefined);

    return (
        <>
            {
                (error || childError) &&
                    <Alert color="danger"> An unexpected error ocurred. Please try again later. </Alert>
            }

            <Tree>
                <ul>
                    { data && <EmployeeTree root={data[0]} setError={setChildError}/> }
                </ul>
            </Tree>
        </>
    );
};

export default EmployeeTreeView;
