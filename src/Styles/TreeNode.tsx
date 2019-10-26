import styled from "styled-components";

const TreeNode = styled.li`
    float: left; text-align: center;
    list-style-type: none;
    position: relative;
    padding: 20px 5px 0 5px;
    
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;

    &::before,  &::after{
        content: '';
        position: absolute; top: 0; right: 50%;
        border-top: 1px solid #ccc;
        width: 50%; height: 20px;
    }
    
    &::after{
        right: auto; left: 50%;
        border-left: 1px solid #ccc;
    }

    &:only-child::after,  &:only-child::before {
        display: none;
    }

    &:only-child{ padding-top: 0;}

    &:first-child::before,  &:last-child::after{
        border: 0 none;
    }

    &:last-child::before{
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
        -webkit-border-radius: 0 5px 0 0;
        -moz-border-radius: 0 5px 0 0;
    }
    
    &:first-child::after{
        border-radius: 5px 0 0 0;
        -webkit-border-radius: 5px 0 0 0;
        -moz-border-radius: 5px 0 0 0;
    }
`;

export default TreeNode;
