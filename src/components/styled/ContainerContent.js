import React from 'react';
import styled from 'styled-components';

function ContainerContent(props) {
    const ContainerContentStyle = styled.div`
        display: flex;
        padding-top: 10px;
        font-size: ${props.fontSize};
    `;

    return (<ContainerContentStyle>{ props.children }</ContainerContentStyle>);
}

export default ContainerContent;