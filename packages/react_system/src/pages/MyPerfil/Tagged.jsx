import React from 'react'
import styled from 'styled-components'

const StyledTagged = styled.div`
display:flex;
flex:1;
& div#NoElements{
    background-color:rgb(11,7,17,1);
    padding:15px;
    border-radius:5px;  
    display:flex;
    flex-direction:column;
    align-items:center; 
    margin:auto;
}
`
export function Tagged() {
    return <StyledTagged>
        <div id="NoElements">
            <h2>
                Todavía no tienes una etiquetaciòn.
        </h2>
            <h3>Cuando lo hagas, aparecerán aquí.</h3> 
        </div>
    </StyledTagged>
}