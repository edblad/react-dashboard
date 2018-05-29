import React from 'react';
import styled from 'styled-components';

function TextArea(props) {
    const TextAreaStyle = styled.textarea`
    margin: 10px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #000;
    color: #fff;

    @media screen and (min-width: 700px){
        width: calc(${props.width}% - 20px);
    }
`;

    return (<TextAreaStyle value={props.value} onChange={props.onChange} placeholder={props.placeholder} />);
}

export default TextArea;