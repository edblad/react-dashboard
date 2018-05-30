import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Button from './styled/Button';

class Currency extends Component {
    state = {
        date: '',
        data: []
    }

    componentDidMount() {
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=fe21b7321aa53d1a4dd706d7fff65038')
        .then(response => response.json())
        .then((data) => {
            this.setState({ data })
        })
        .catch(error => {
            console.log(error);
        })
    }

    calcCurrency = () => {
        const { data } = this.state;
        let SEK = data.rates && data.rates.SEK;
        let EUR = data.rates && data.rates.EUR;
        let date = data.date && data.date;
        let sum = EUR / SEK;
        return sum.toFixed(2);
    }

    render(){
        const { data } = this.state;
        let SEK = data.rates && data.rates.SEK.toFixed(2);
        let EUR = data.rates && data.rates.EUR;
        let date = data.date && data.date;

        return (
            <Container background='white' desktopWidth='33.3' tabletWidth='50'>
                <ContainerHeader text='Valutakurs'/>
                <ContainerContent>
                    <Button onClick={this.fetchCurrency} text="Uppdatera" style="green" />
                    <p>{ date }</p>
                    <p>{ EUR } euro kostar { SEK } kr</p>
                    <p>1 kr kostar { this.calcCurrency() } euro</p>
                </ContainerContent>
            </Container>
        );
    }
}

export default Currency;