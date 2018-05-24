import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';

class Clock extends Component {
    state = {
        date: new Date()
      }
    
      componentDidMount() {
        setInterval(
          () => this.tick(),
          1000
        );
      }
    
      tick = () => {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return (
            <Container background='white'>
              <ContainerHeader>Klocka</ContainerHeader>
              <ContainerContent>
                { this.state.date.toLocaleTimeString() }
              </ContainerContent>
            </Container>
        )
    }
}

export default Clock;