import React, { Component } from 'react';
import Container from './styled/Container';

class Currency extends Component {
    state = {
        date: '',
        rates: {
            EUR: '',
            SEK: ''
        }
    }

    componentDidMount() {
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=fe21b7321aa53d1a4dd706d7fff65038')
        .then(response => response.json())
        .then((data) => {
            this.setState({ date: data.date, rates: { SEK: data.rates.SEK, EUR: data.rates.EUR } })
        })
        .catch(error => {
            console.log(error);
        })
    }

    calcCurrency = () => {
        let sum = this.state.rates.EUR / this.state.rates.SEK;
        return sum.toFixed(3);
    }

    render(){
        return (
            <Container>
                <button onClick={this.fetchCurrency}>Update currency</button>
                <p>{ this.state.date }</p>
                <p>{this.state.rates.EUR} euro kostar {this.state.rates.SEK} kr</p>
                <p>1 kr kostar { this.calcCurrency() } euro</p>
            </Container>
        );
    }
}

export default Currency;