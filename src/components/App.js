import React, { Component } from 'react';
import Counter from './Counter';
import '../App.css';

class App extends Component {
  state = {
    seconds: 60,
  }

  countDown = () => {
    this.setState({ seconds: this.state.seconds - 1 });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.countDown}>Count down</button>
        <Counter seconds={this.state.seconds} />
      </div>
    );
  }
}

export default App;
