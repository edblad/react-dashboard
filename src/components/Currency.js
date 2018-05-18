import React, { Component } from 'react';

class Currency extends Component {
    state = {
        data: [],
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
            this.setState({ data });
            this.calcCurrency();
        })
        .catch(error => {
            console.log(error);
        })
    }

    calcCurrency = () => {
        this.setState({
            EUR: this.state.data.base,
            SEK: this.state.data.rates.SEK
        });
        console.log(this.state.EUR)
        console.log(this.state.SEK);
    }

    render(){
        return (
            <div>
                <button>Update currency</button>
                <p>{this.state.SEK}</p>
            </div>
        );
    }
}

export default Currency;