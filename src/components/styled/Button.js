import React from 'react';
import styled from 'styled-components';

function Button(props) {
    let backgroundColor = '';
    let hoverBackgroundColor = '';
    let borderColor = '';
    let hoverBorderColor = '';

    if(props.style === 'green'){
        backgroundColor = '#709c78';
        hoverBackgroundColor = '#598261';
        borderColor = '#707a72';
        hoverBorderColor = '#285f28';
    }
    if(props.style === 'red'){
        backgroundColor = '#d9534f';
        hoverBackgroundColor = '#c9302c';
        borderColor = '#d43f3a';
        hoverBorderColor = '#ac2925';
    }

    const ButtonStyle = styled.button`
        font-size: 1em;
        color: #fff;
        background-color: ${ backgroundColor };
        border-color: ${ borderColor };
        border-radius: 3px;
        padding: 4px 10px;
        cursor: pointer;
        float: right;
        margin-top: 10px; 

        &:hover {
            background-color: ${ hoverBackgroundColor };
            border-color: ${ hoverBorderColor };
        }
    `;

    return (
        <ButtonStyle onClick={props.onClick} disabled={props.disabled}>
            { props.text }
        </ButtonStyle>
    )
}

export default Button;