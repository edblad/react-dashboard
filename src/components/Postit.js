import React from 'react';
import Container from './styled/Container';

function Postit(props) {
    return (
        <Container>
            <textarea value={props.value} onChange={props.saveText} name="text" />
        </Container>
    )
}

export default Postit;