import React, { Component } from 'react';

class Timer extends Component {
    state = {
        seconds: this.props.seconds,
        secondsLeft: this.props.seconds,
        style: {
            backgroundColor: '#000',
            color: '#fff'
        },
        resetButton: false
    }

    countDown = () => {
        this.interval = setInterval( () => {
            console.log(this.state.secondsLeft);
            if (this.state.secondsLeft > 0) {
                this.setState({ secondsLeft: this.state.secondsLeft - 1 });
            }
            if (this.state.secondsLeft === 0){
                this.setState(
                    { 
                        style: {
                            backgroundColor: '#fff',
                            color: '#000'
                        },
                        resetButton: true
                    }
                );
            }
        }, 1000);
    }

    resetTimer = () => {
        this.setState({ secondsLeft: this.props.seconds });
    }

    render(){
        let countDownButton = <button onClick={this.countDown}>Count down</button>;
        if(this.state.resetButton){
            countDownButton = null;
        }

        let resetButton = null;
        if(this.state.resetButton){
            resetButton = <button onClick={this.resetTimer}>Reset</button>;
        }

        return (
            <div style={this.state.style}>
                { countDownButton }
                { resetButton }
                <p>{this.state.secondsLeft} seconds left</p>
            </div>
        )
    }
}

export default Timer;