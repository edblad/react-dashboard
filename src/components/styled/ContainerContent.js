import React from 'react';
import styled from 'styled-components';

function ContainerContent(props) {
    const ContainerContentStyle = styled.div`
        padding: 10px 20px 20px 20px;
        font-size: ${props.fontSize};
    `;

    return (<ContainerContentStyle>{ props.children }</ContainerContentStyle>);
}

export default ContainerContent;