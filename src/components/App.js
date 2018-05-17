import React, { Component } from 'react';
import Timer from './Timer';
import Postit from './Postit';
import '../App.css';

class App extends Component {
  state = {
    text: ''
  }

  saveText = (event) => {
      this.setState({ text: event.target.value  });
      console.log(this.state.text);
  }

  render() {
    return (
      <div className="App">
        <Timer seconds={5} />
        <Postit saveText={this.saveText} />
      </div>
    );
  }
}

export default App;
