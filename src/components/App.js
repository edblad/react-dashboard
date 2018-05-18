import React, { Component } from 'react';
import Timer from './Timer';
import Postit from './Postit';
import Clock from './Clock';
import Currency from './Currency';
import '../App.css';

class App extends Component {
  state = {
    postitText: localStorage.getItem('text'),
    // data: [],
    // EUR: '',
    // SEK: ''
  }

  saveText = (event) => {
      this.setState({ postitText: event.target.value  });
      localStorage.setItem('text', event.target.value);
  }

  // componentDidMount() {
  //   this.fetchCurrency();
  // }

  // fetchCurrency = () => {
  //   fetch('http://data.fixer.io/api/latest?access_key=fe21b7321aa53d1a4dd706d7fff65038')
  //   .then(response => response.json())
  //   .then((data) => {
  //       this.setState({ data });
  //       this.calcCurrency();
  //   })
  //   .catch(error => {
  //       console.log(error);
  //   })
  // }

  // calcCurrency = () => {
  //   this.setState({
  //     EUR: this.state.data.base,
  //     SEK: this.state.data.rates.SEK
  //   });
  //   console.log(this.state.EUR)
  //   console.log(this.state.data.rates.SEK);
  // }
  
  
  render() {
    return (
      <div className="App">
        <Timer seconds={5} />
        <Postit value={this.state.postitText} saveText={this.saveText} />
        <Clock />
        <Currency currencyData={this.state.data} />
      </div>
    );
  }
}

export default App;