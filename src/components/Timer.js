import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Button from './styled/Button';

class Timer extends Component {
    state = {
        secondsLeft: this.props.seconds,
        startButton: true,
        resetButton: false,
        done: false
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
                resetButton: true,
                done: true
            });
        }
    }

    resetTimer = () => {
        this.setState({ 
            secondsLeft: this.props.seconds, 
            resetButton: false,
            startButton: true,
            done: false
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

        let timer = () => {
            let timerOutput = '';
            
            if(!this.state.done){
                return timerOutput = (
                    <Container background='white'>
                        <ContainerHeader text='Timer'/>
                        <ContainerContent>
                            { startButton }
                            { resetButton }
                            <p>{this.state.secondsLeft} seconds left</p>
                        </ContainerContent>
                    </Container>
                )
            }
            
            return timerOutput = (
                <Container background='salmon'>
                    <ContainerHeader text='Timer'/>
                    <ContainerContent>  
                        { startButton }
                        { resetButton }
                        <p>{this.state.secondsLeft} seconds left</p>
                    </ContainerContent>
                </Container>
            )
            
        }
        
        return (
             timer()
        )
    }
}

export default Timer;