import React, { Component } from 'react';
import Container from './styled/Container';

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
            <Container>
               { this.state.date.toLocaleTimeString() }
            </Container>
        )
    }
}

export default Clock;