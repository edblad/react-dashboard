import React, { Component } from 'react';
import Timer from './Timer';
import Postit from './Postit';
import Clock from './Clock';
import Currency from './Currency';
import Weather from './Weather';
import Header from './Header';
import Main from './styled/Main';
import '../App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <Postit />
          <Clock />
          <Weather />
          <Currency />
          <Timer />
        </Main>
      </React.Fragment>
    );
  }
}

export default App;