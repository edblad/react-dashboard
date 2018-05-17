import React, { Component } from 'react';

class Timer extends Component {
    state = {
        secondsLeft: this.props.secondsLeft,
    }

    countDown = () => {
        if(this.state.secondsLeft > 0){
          this.setState({ secondsLeft: this.state.secondsLeft - 1 });
        }
    }

    componentDidMount() {
        this.interval = setInterval( () => {
            console.log(this.state.secondsLeft);
            if (this.state.secondsLeft > 0) {
                this.setState({ secondsLeft: this.state.secondsLeft - 1 });
            }
            if (this.state.secondsLeft === 0){
                this.props.handleChange(0)
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
        return (
            <div className="timer">
                <button onClick={this.countDown}>Count down</button>
                <p>{this.state.secondsLeft}</p>
            </div>
        )
    }
}

export default Timer;