import React, { Component } from 'react';
import Timer from './Timer';
import '../App.css';

class App extends Component {
  state = {
    secondsLeft: 10
  }

  handleChange = (timeLeft) => {
    this.setState({ secondsLeft: timeLeft });
    console.log(timeLeft)
  }
  
  render() {
    return (
      <div className="App">
        <Timer secondsLeft={this.state.secondsLeft} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
