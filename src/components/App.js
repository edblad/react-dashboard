import React, { Component } from 'react';
import Timer from './Timer';
import Postit from './Postit';
import Clock from './Clock';
import Currency from './Currency';
import Weather from './Weather';
import Header from './Header';
import Main from './styled/Main';
import styled from 'styled-components';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main>
            <Postit />
            <Clock />
            <Weather />
            <Currency />
            <Timer />
          </Main>
      </div>
    );
  }
}

export default App;