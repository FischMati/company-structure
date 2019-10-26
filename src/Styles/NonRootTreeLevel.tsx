import styled from "styled-components";
import TreeLevel from "./TreeLevel";

const NonRootTreeLevel = styled(TreeLevel)`
    &::before{
        content: '';
        position: absolute; top: 0; left: 50%;
        border-left: 1px solid #ccc;
        width: 0; height: 20px;
    }
`;

export default NonRootTreeLevel;
