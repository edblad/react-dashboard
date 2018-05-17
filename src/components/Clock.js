import React, { Component } from 'react';

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
            <div className="clock">
               { this.state.date.toLocaleTimeString() }
            </div>
        )
    }
}

export default Clock;