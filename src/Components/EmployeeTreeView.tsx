import React, {useState} from "react";
import Alert from "reactstrap/lib/Alert";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import Tree from "../Styles/Tree";
import TreeLevel from "../Styles/TreeLevel";
import EmployeeTree from "./EmployeeTree";

const EmployeeTreeView = () => {
    const { data, isRejected: rootError } = useFetchEmployeesByManager(0);
    const [childError, setChildError] = useState(false);

    return (
        <>
            {
                (rootError || childError) &&
                    <Alert color="danger"> An unexpected error ocurred. Please try again later. </Alert>
            }

            <Tree>
                <TreeLevel>
                    { data && <EmployeeTree root={data[0]} onRejectedStatusChange={setChildError} /> }
                </TreeLevel>
            </Tree>
        </>
    );
};

export default EmployeeTreeView;
