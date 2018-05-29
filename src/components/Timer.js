import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Button from './styled/Button';

class Timer extends Component {
    state = {
        secondsLeft: '',
        startButton: true,
        resetButton: false,
        done: false
    }

    handleInput = (event) => {
        this.setState({ secondsLeft: event.target.value });
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
        /** Only show start button and input field before presssing the start button
         *  The timeleft will only show while counting down (after pressing the start button)
         */
        let timeLeft = null;
        let inputField = <span><label>Hur många sekunder vill du räkna ner?</label><input type="number" value={this.state.secondsLeft} onChange={this.handleInput} /></span>;
        let startButton = <Button onClick={this.countDown} text="Start" style="green" />;
        if(!this.state.startButton || this.state.secondsLeft === '0'){
            startButton = null;
            inputField = null;
            timeLeft = <p>{this.state.secondsLeft} sekunder kvar</p>;
        }

        // Only show reset button when the 
        let resetButton = null;
        if(this.state.resetButton || this.state.secondsLeft === '0'){
            resetButton = <Button onClick={this.resetTimer} text="Reset" style="red" />;
        }

        let backgroundColor = 'white';
        if(this.state.done){
            backgroundColor = 'salmon'
        }
        
        return (
            <Container background={backgroundColor} desktopWidth='33.3' tabletWidth='33.3'>
                <ContainerHeader text='Timer'/>
                <ContainerContent>
                    { inputField }
                    { startButton }
                    { resetButton }
                    { timeLeft }
                </ContainerContent>
            </Container>
        )
    }
}

export default Timer;