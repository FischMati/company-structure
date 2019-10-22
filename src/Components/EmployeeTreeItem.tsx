import React, {useState} from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployessByManager";
import useDeferredFetchEmployeesByManager from "../Hooks/useDeferredFetchEmployessByManager";

const EmployeeButton = styled(Button)`
    position: relative;
    max-width: 500px;
      
      &:before {
        content: '';
        position: absolute;
        right: 16px;
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

const EmployeeTreeitem =
    () => {
        const { isPending, run } = useDeferredFetchEmployeesByManager(0);

        return (
            <EmployeeButton
                outline
                color="primary"
                size="lg"
                onClick={run}
                className={isPending ? "sending" : ""}
                block
            >
                Click me
            </EmployeeButton>
        );
    };

export default EmployeeTreeitem;
