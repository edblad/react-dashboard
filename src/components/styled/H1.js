import React from 'react';
import styled from 'styled-components';

function H1(props) {
    const H1Style = styled.h1`
        font-size: 1.5em;
    `;

    return (
        <H1Style>{ props.text }</H1Style>
    );
}


export default H1;