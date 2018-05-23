import React from 'react';
import styled from 'styled-components';

// Styling
const Container = styled.main`
  height: 100vh;
  background: #ccc;
`;

function MainContainer(props) {
    return (
        <Container>
            { props.children }
        </Container>
    );
}

export default MainContainer;