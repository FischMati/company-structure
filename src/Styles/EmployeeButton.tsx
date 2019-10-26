import {Button} from "reactstrap";
import styled from "styled-components";

export const EmployeeButton = styled(Button)`
    position: relative;
    z-index: 100;

    padding: 5px 10px;
    text-decoration: none;
    display: inline-block;
    
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;

    &:before {
        content: '';
        position: absolute;
        right: 4px;
        top: 50%;
        margin-top: -9px;
        width: 18px;
        height: 18px;
        border: 2px solid;
        border-left-color: transparent;
        border-right-color: transparent;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.5s;
        animation: 0.8s linear infinite rotate;
    }
    
      &.sending{        
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
