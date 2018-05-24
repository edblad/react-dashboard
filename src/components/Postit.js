import React from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import TextArea from './styled/TextArea';

function Postit(props) {
    return (
        <Container background='white'>
            <ContainerHeader>Anteckningar</ContainerHeader>
            <ContainerContent>
                <TextArea value={props.value} onChange={props.saveText} name="text" />
            </ContainerContent>
        </Container>
    )
}

export default Postit;