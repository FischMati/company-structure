import React from "react";
import IEmployee from "../Interfaces/Employee";
import {EmployeeButton} from "../Styles/EmployeeButton";

interface IProps {
    employee: IEmployee;
    fetchEmployeesFn: () => void;
    isPending: boolean;
}

const EmployeeTreeitem =
    ({employee: {
        first,
        last,
    },
     isPending,
     fetchEmployeesFn,
    }: IProps) => {
        return (
            <EmployeeButton
                outline
                color="primary"
                size="lg"
                onClick={fetchEmployeesFn}
                className={isPending ? "sending" : ""}
            >
                <div style={{paddingLeft: "28px", paddingRight: "28px"}}>
                    {`${first} ${last}`}
                </div>
            </EmployeeButton>
        );
    };

export default EmployeeTreeitem;
