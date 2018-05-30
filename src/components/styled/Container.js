import React from 'react';
import styled from 'styled-components';

function Container(props) {
    const ContainerStyle = styled.div`
        margin: 10px;
        border: solid 2px #707a72;
        border-radius: 5px;
        background: ${props.background};
        color: #202020;
        box-shadow: 5px 5px #717b73;
        overflow: hidden;
        
        @media screen and (min-width: 700px){
            width: calc(${props.tabletWidth}% - 20px);
        }

        @media screen and (min-width: 1220px){
            width: calc(${props.desktopWidth}% - 20px);
        }
    `;

    return (<ContainerStyle>{ props.children }</ContainerStyle>);
}

export default Container;