import React from 'react';
import styled from 'styled-components';

function Button(props) {
    const ButtonStyle = styled.button`
        font-size: 1.5em;
    `;

    return (
        <ButtonStyle>{ props.text }</ButtonStyle>
    )
}


export default Button;