import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Button from './styled/Button';
import InputField from './styled/InputField';
import Paragraph from './styled/Paragraph';

class Timer extends Component {
    state = {
        secondsLeft: '',
        disabledButton: true,
        startButton: true,
        resetButton: false,
        done: false
    }

    handleInput = (event) => {
        this.setState(
            { 
                secondsLeft: event.target.value, 
                disabledButton: false 
            }
        );
    }

    // Counting down every second
    countDown = () => {
        this.setState({ startButton: false });

        let intervalId = setInterval(
            () => this.tick(intervalId),
            1000
        );
    }

    // As long as there is time left count down until 0 then set the state to be done
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
            secondsLeft: '',
            disabledButton: true,
            startButton: true,
            resetButton: false,
            done: false
        });
    }

    render(){
        // Only show start button and input field before pressing the start button
        let feedback = <Paragraph>Hur många sekunder vill du räkna ner?</Paragraph>;
        let inputField = <InputField type="number" value={this.state.secondsLeft} onChange={this.handleInput} />;
        let button = <Button onClick={this.countDown} disabled={this.state.disabledButton} text="Starta" buttonColor="green" />;
        if(!this.state.startButton || this.state.secondsLeft === '0'){
            button = null;
            inputField = null;
            feedback = <Paragraph fontSize="1.5em">{this.state.secondsLeft} sekunder kvar</Paragraph>;
        }

        // Only show reset button when time is up
        if(this.state.resetButton || this.state.secondsLeft === '0'){
            button = <Button onClick={this.resetTimer} text="Återställ" buttonColor="red" />;
        }

        // Changes the background color when time is up or if user writes 0 into the input field
        let backgroundColor = this.state.done || this.state.secondsLeft === '0' ? 'salmon' : 'white';
        
        return (
            <Container background={backgroundColor} desktopWidth='33.3' tabletWidth='100'>
                <ContainerHeader text='Timer'/>
                <ContainerContent>
                    { feedback }
                    { inputField }
                    { button }
                </ContainerContent>
            </Container>
        )
    }
}

export default Timer;