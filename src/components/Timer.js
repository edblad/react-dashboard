import React, { Component } from 'react';

class Timer extends Component {
    state = {
        secondsLeft: this.props.seconds,
        style: {
            backgroundColor: 'black',
            color: 'white'
        },
        startButton: true,
        resetButton: false
    }

    countDown = () => {
        this.setState({ startButton: false });
        
        setInterval( () => {
            // console.log(this.state.secondsLeft);
            if (this.state.secondsLeft > 0) {
                this.setState(
                    { 
                        secondsLeft: this.state.secondsLeft - 1
                    }
                );
            }
            if (this.state.secondsLeft === 0){
                this.setState(
                    { 
                        style: {
                            backgroundColor: 'salmon'
                        },
                        resetButton: true
                    }
                );
            }
        }, 1000);
    }

    resetTimer = () => {
        this.setState(
            { 
                secondsLeft: this.props.seconds, 
                style: { backgroundColor: 'black', color: 'white'},
                resetButton: false
            }
        );
    }

    render(){
        let startButton = <button onClick={this.countDown}>Count down</button>;
        if(!this.state.startButton){
            startButton = null;
        }

        let resetButton = null;
        if(this.state.resetButton){
            resetButton = <button onClick={this.resetTimer}>Reset</button>;
        }

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