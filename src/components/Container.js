import React from 'react';
import styled from 'styled-components';

// Styling
const Container = styled.div`
  height: 100vh;
  background: #ccc;
`;

function Container(props) {
    return (
        <Container>
            { props.children }
        </Container>
    );
}

export default Container;