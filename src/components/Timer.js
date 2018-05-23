import React, { Component } from 'react';
//import styled from 'styled-components';

class Timer extends Component {
    state = {
        secondsLeft: this.props.seconds,
        style: { backgroundColor: 'black', color: 'white'},
        startButton: true,
        resetButton: false
    }

    countDown = () => {
        this.setState({ startButton: false });

        let intervalId = setInterval(
            () => this.tick(intervalId),
            1000
        );
    }

    tick = (intervalId) => {
        if (this.state.secondsLeft > 0) {
            this.setState({ 
                secondsLeft: this.state.secondsLeft - 1
            });
        }
        if (this.state.secondsLeft === 0){
            clearInterval(intervalId);
            this.setState({ 
                style: {
                    backgroundColor: 'salmon'
                },
                resetButton: true
            });
        }
    }

    resetTimer = () => {
        this.setState({ 
            secondsLeft: this.props.seconds, 
            style: { backgroundColor: 'black', color: 'white'},
            resetButton: false,
            startButton: true
        });
    }

    render(){
        let startButton = <button onClick={this.countDown}>Start</button>;
        if(!this.state.startButton){
            startButton = null;
        }

        let resetButton = null;
        if(this.state.resetButton){
            resetButton = <button onClick={this.resetTimer}>Reset</button>;
        }

        // const Container = styled.div`
        //     background-color: ${props => props.primary ? 'black' : 'salmon'};
        //     color: white
        // `;

        return (
            <div style={this.state.style}>
                { startButton }
                { resetButton }
                <p>{this.state.secondsLeft} seconds left</p>
            </div>
        )
    }
}

export default Timer;