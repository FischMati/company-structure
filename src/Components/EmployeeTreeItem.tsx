import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import IEmployee from "../Interfaces/Employee";

const EmployeeButton = styled(Button)`
    position: relative;
    font-size: 14px;
    
      &:before {
        content: '';
        position: absolute;
        right: 5px;
        top: 50%;
        margin-top: -12px;
        width: 24px;
        height: 24px;
        border: 2px solid;
        border-left-color: transparent;
        border-right-color: transparent;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.5s;
        animation: 0.8s linear infinite rotate;
      }
      &.sending{
        pointer-events: none;
        cursor: not-allowed;
        
        &:before {
          transition-duration: 1s;
          opacity: 1;
        }
      }
    }
    
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes fade {
      0%   { opacity: 0.5; }
      100% { opacity: 1.0; }
    }
`;

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
