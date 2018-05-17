import React, { Component } from 'react';
import Timer from './Timer';
import '../App.css';

class App extends Component {
  // state = {
  //   secondsLeft: 5
  // }

  // handleChange = (timeLeft) => {
  //   this.setState({ secondsLeft: timeLeft });
  //   console.log(timeLeft)
  // }
  
  render() {
    return (
      <div className="App">
        <Timer seconds={60} />
      </div>
    );
  }
}

export default App;
