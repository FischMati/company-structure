import styled from "styled-components";

const Tree = styled.div`
    * {
        margin: 0; padding: 0;
    }
    
    width: max-content;
    min-height: 500px;
    
    li button {
        
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

    @media only screen and ( max-width: 1500px ) {
        button {
            font-size: 12px;
        }
    }
    
    @media only screen and ( max-width: 1000px ) {
        button {
            font-size: 10px;
        }
    }
    
    @media only screen and ( max-width: 800px ) {
        button {
            font-size: 8px;
        }
    }
`;

export default Tree;
