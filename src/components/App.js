import React, { Component } from 'react';
import Timer from './Timer';
import Postit from './Postit';
import Clock from './Clock';
import Currency from './Currency';
import Weather from './Weather';
//import SearchForm from './test';
import Header from './styled/Header';
import Main from './styled/Main';
import styled from 'styled-components';
import '../App.css';

class App extends Component {
  state = {
    postitText: localStorage.getItem('text')
  }

  saveText = (event) => {
      this.setState({ postitText: event.target.value  });
      localStorage.setItem('text', event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main>
          <Timer seconds={5} />
          <Postit value={this.state.postitText} saveText={this.saveText} />
          <Clock />
          <Currency currencyData={this.state.data} />
          <Weather />
          {/*<SearchForm />*/}
        </Main>
      </div>
    );
  }
}

export default App;