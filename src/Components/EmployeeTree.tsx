import React from "react";
import styled from "styled-components";
import useFetchEmployeesByManager from "../Hooks/useFetchEmployeesByManager";
import EmployeeTreeitem from "./EmployeeTreeItem";

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
`;

const EmployeeTree = () => {
    const { data, isPending } = useFetchEmployeesByManager(0);

    return (
            <Tree>
                <ul>
                    <li>
                        { !isPending && <EmployeeTreeitem employee={data[0]}/> }
                        <ul>
                            <li>
                                { !isPending && <EmployeeTreeitem employee={data[0]}/> }
                            </li>
                            <li>
                                { !isPending && <EmployeeTreeitem employee={data[0]}/> }
                            </li>
                            <li>
                                { !isPending && <EmployeeTreeitem employee={data[0]}/> }
                            </li>
                        </ul>
                    </li>
                </ul>
            </Tree>
    );
};

export default EmployeeTree;
