import React from "react";
import styled from "styled-components";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import EmployeeTreeitem from "./EmployeeTreeItem";
import EmployeeTree from "./EmployeeTree";

const Tree = styled.div`
* {margin: 0; padding: 0;}

 ul {
    padding-top: 20px; position: relative;
 
 transition: all 0.5s;
 -webkit-transition: all 0.5s;
 -moz-transition: all 0.5s;
}

li button {
  padding: 5px 10px;
  text-decoration: none;
  display: inline-block;
  
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

 li {
 float: left; text-align: center;
 list-style-type: none;
 position: relative;
 padding: 20px 5px 0 5px;
 
 transition: all 0.5s;
 -webkit-transition: all 0.5s;
 -moz-transition: all 0.5s;
}

 li::before,  li::after{
 content: '';
 position: absolute; top: 0; right: 50%;
 border-top: 1px solid #ccc;
 width: 50%; height: 20px;
}
 li::after{
 right: auto; left: 50%;
 border-left: 1px solid #ccc;
}

 li:only-child::after,  li:only-child::before {
 display: none;
}

 li:only-child{ padding-top: 0;}


 li:first-child::before,  li:last-child::after{
 border: 0 none;
}

 li:last-child::before{
 border-right: 1px solid #ccc;
 border-radius: 0 5px 0 0;
 -webkit-border-radius: 0 5px 0 0;
 -moz-border-radius: 0 5px 0 0;
}
 li:first-child::after{
 border-radius: 5px 0 0 0;
 -webkit-border-radius: 5px 0 0 0;
 -moz-border-radius: 5px 0 0 0;
}

 ul ul::before{
 content: '';
 position: absolute; top: 0; left: 50%;
 border-left: 1px solid #ccc;
 width: 0; height: 20px;
}

li button:hover+ul li button {
 background: #c8e4f8; color: #000; border: 1px solid #94a0b4;
}
/*Connector styles on hover*/
li button:hover+ul li::after, 
li button:hover+ul li::before, 
li button:hover+ul::before, 
li button:hover+ul ul::before{
border-color:  #94a0b4;
}


`;

const EmployeeTreeView = () => {
    const { data, isPending } = useFetchEmployeesByManager(0);

    return (
            <Tree>
                <ul>
                    { !isPending && <EmployeeTree root={data[0]}/> }
                </ul>
            </Tree>
    );
};

export default EmployeeTreeView;
