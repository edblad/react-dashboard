import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Button from './styled/Button';

class Timer extends Component {
    state = {
        secondsLeft: '',
        disabledButton: true,
        startButton: true,
        resetButton: false,
        done: false
    }

    handleInput = (event) => {
        this.setState({ secondsLeft: event.target.value, disabledButton: false });
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
            disabledButton: true,
            resetButton: false,
            startButton: true,
            done: false
        });
    }

    render(){
        /** Only show start button and input field before presssing the start button
         *  The timeleft will only show while counting down (after pressing the start button)
         */
        let feedback = <p>Hur många sekunder vill du räkna ner?</p>;
        let inputField = <span><input type="number" value={this.state.secondsLeft} onChange={this.handleInput} /></span>;
        let startButton = <Button onClick={this.countDown} disabled={this.state.disabledButton} text="Starta" style="green" />;
        if(!this.state.startButton || this.state.secondsLeft === '0'){
            startButton = null;
            inputField = null;
            feedback = <p>{this.state.secondsLeft} sekunder kvar</p>;
        }

        // Only show reset button when the 
        let resetButton = null;
        if(this.state.resetButton || this.state.secondsLeft === '0'){
            resetButton = <Button onClick={this.resetTimer} text="Återställ" style="red" />;
        }

        // Changes the background color when time is up
        let backgroundColor = this.state.done ? 'salmon' : 'white';
        
        return (
            <Container background={backgroundColor} desktopWidth='33.3' tabletWidth='100'>
                <ContainerHeader text='Timer'/>
                <ContainerContent>
                    { feedback }
                    { inputField }
                    { startButton }
                    { resetButton }
                </ContainerContent>
            </Container>
        )
    }
}

export default Timer;