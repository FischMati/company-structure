import React, {ReactNode} from "react";
import Alert from "reactstrap/lib/Alert";

interface IProps {
    error?: Error;
    children: ReactNode;
}

export const ErrorProne = ({error, children}: IProps) => (
    <>
        {error && <Alert color="danger"> An unexpected error ocurred. Please try again later. </Alert>}
        {!error && children}
    </>
);