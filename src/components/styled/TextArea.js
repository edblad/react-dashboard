import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
    margin: 10px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #000;
    color: #fff;

    @media screen and (min-width: 1220px){
        width: calc(75% - 20px)!important;
    }

    @media screen and (min-width: 700px){
        width: calc(50% - 20px);
    }
`;

export default TextArea;