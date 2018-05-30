import React from 'react';
import styled from 'styled-components';

function ContainerHeader(props) {
    const ContainerHeaderStyle = styled.h2`
        background: #f0f1e9;
        border-bottom: #868686 solid 1px;
        padding: 20px;
        font-size: 1.5em;
        text-align: left;
    `;

    return (
        <ContainerHeaderStyle>{ props.text }</ContainerHeaderStyle>
    )
}


export default ContainerHeader;