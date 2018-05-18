import React, { Component } from 'react';
import Timer from './Timer';
import Postit from './Postit';
import Clock from './Clock';
//import Currency from './Currency';
import '../App.css';
import Currency from './Currency';

class App extends Component {
  state = {
    postitText: localStorage.getItem('text'),
    data: []
  }

  saveText = (event) => {
      this.setState({ postitText: event.target.value  });
      localStorage.setItem('text', event.target.value);
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = () => {
    fetch('http://data.fixer.io/api/latest?access_key=fe21b7321aa53d1a4dd706d7fff65038')
    .then(response => response.json())
    .then(data => {
        this.setState({ data: data });
        return data;
    })
    .catch(error => {
        console.log(error);
    })
  }
  
  render() {
    return (
      <div className="App">
        <Timer seconds={5} />
        <Postit value={this.state.postitText} saveText={this.saveText} />
        <Clock />
       
      </div>
    );
  }
}

export default App;