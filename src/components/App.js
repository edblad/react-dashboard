import React, { Component } from 'react';
import Timer from './Timer';
import Postit from './Postit';
import '../App.css';

class App extends Component {
  state = {
    text: localStorage.getItem('text')
  }

  saveText = (event) => {
      this.setState({ text: event.target.value  });
      localStorage.setItem('text', event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Timer seconds={5} />
        <Postit saveText={this.saveText} value={this.state.text} />
      </div>
    );
  }
}

export default App;