import React from 'react';
import styled from 'styled-components';

function Button(props) {
    let backgroundColor = '';
    let borderColor = '';
    if(props.style === 'green'){
        backgroundColor = '#5cb85c';
        borderColor = '#4cae4c';
    }
    if(props.style === 'red'){
        backgroundColor = '#d9534f';
        borderColor = '#d43f3a';
    }

    const ButtonStyle = styled.button`
        font-size: 1em;
        color: #fff;
        background-color: ${ backgroundColor };
        border-color: ${ borderColor };
        border-radius: 3px;
        padding: 4px 10px;
        cursor: pointer;
    `;

    return (
        <ButtonStyle onClick={props.onClick}>
            { props.text }
        </ButtonStyle>
    )
}


export default Button;