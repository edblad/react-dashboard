import React from 'react';
import styled from 'styled-components';

function Paragraph(props) {
    const ParagraphStyle = styled.p`
        font-size: ${props.fontSize};
        float: ${props.align};
    `;

    return (
        <ParagraphStyle>{ props.children }</ParagraphStyle>
    );
}


export default Paragraph;