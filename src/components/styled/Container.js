import React from 'react';
import styled from 'styled-components';

function Container(props) {
    const ContainerStyle = styled.div`
        padding: 20px;
        margin: 10px;
        border: solid 1px #d2d2db;
        border-radius: 5px;
        background: ${props.background};
        color: #202020;
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