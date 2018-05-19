import React, { Component } from 'react';

class Currency extends Component {
    state = {
        EUR: '',
        SEK: ''
    }

    componentDidMount() {
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=fe21b7321aa53d1a4dd706d7fff65038')
        .then(response => response.json())
        .then((data) => {
            this.setState({ SEK: data.rates.SEK, EUR: data.rates.EUR  })
        })
        .catch(error => {
            console.log(error);
        })
    }

    calcCurrency = () => {
        let sum = this.state.EUR / this.state.SEK;
        return sum.toFixed(3);
    }

    render(){
        return (
            <div>
                <button>Update currency</button>
                <p>{this.state.EUR} euro kostar {this.state.SEK} kr</p>
                <p>1 kr kostar { this.calcCurrency() } euro</p>
            </div>
        );
    }
}

export default Currency;