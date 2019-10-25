import React from "react";
import styled from "styled-components";
import IEmployee from "../Interfaces/Employee";
import {EmployeeButton} from "../Styles/EmployeeButton";

export interface IProps {
    employee: IEmployee;
    onClick: () => void;
    isPending: boolean;
}

const ButtonContent = styled.div`
    padding-left: 14px;
    padding-right: 14px;
`;

const EmployeeTreeitem =
    ({employee: {
        first,
        last,
    },
     isPending,
     onClick,
    }: IProps) => {
        return (
            <EmployeeButton
                outline
                color="primary"
                size="sm"
                onClick={!isPending && onClick}
                className={isPending ? "sending" : ""}
            >
                <ButtonContent>
                    {`${first} ${last}`}
                </ButtonContent>
            </EmployeeButton>
        );
    };

export default EmployeeTreeitem;
