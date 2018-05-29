import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Button from './styled/Button';

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
            <Container background='white' desktopWidth='33.3' tabletWidth='33.3'>
                <ContainerHeader text='Valutakurs'/>
                <ContainerContent>
                    <Button onClick={this.fetchCurrency} text="Uppdatera" style="green" />
                    <p>{ this.state.date }</p>
                    <p>{this.state.rates.EUR} euro kostar {this.state.rates.SEK} kr</p>
                    <p>1 kr kostar { this.calcCurrency() } euro</p>
                </ContainerContent>
            </Container>
        );
    }
}

export default Currency;