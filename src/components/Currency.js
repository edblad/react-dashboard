import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Button from './styled/Button';
import Paragraph from './styled/Paragraph';

class Currency extends Component {
    state = {
        date: null,
        data: [],
        error: null
    }

    componentDidMount() {
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=fe21b7321aa53d1a4dd706d7fff65038')
        .then(response => response.json())
        .then((data) => {
            this.setState({ data })
        },
        (error) => {
            this.setState({ error })
        });
    }

    // Calculates how much a Euro costs in SEK
    calcCurrency = () => {
        const { data } = this.state;
        let SEK = data.rates && data.rates.SEK;
        let EUR = data.rates && data.rates.EUR;

        let result = EUR / SEK;
        return result.toFixed(2);
    }

    render(){
        const { data, error } = this.state;
        const SEK = data.rates && data.rates.SEK.toFixed(2);
        const date = data.date && data.date;

        if(error) {
            return (
                <Container background='white' desktopWidth='33.3' tabletWidth='50'>
                    <ContainerHeader text='Valutakurs'/>
                    <ContainerContent>
                        <Paragraph>{ error.message }</Paragraph>
                    </ContainerContent>
                </Container>
            )
        } else {
            return (
                <Container background='white' desktopWidth='33.3' tabletWidth='50'>
                    <ContainerHeader text='Valutakurs'/>
                    <ContainerContent>
                        <Paragraph fontColor="#ccc" fontSize="0.8em">{ date }</Paragraph>
                        <Paragraph>1 EUR > { SEK } SEK</Paragraph>
                        <Paragraph>1 SEK > { this.calcCurrency() } EUR</Paragraph>
                        <Button onClick={this.fetchCurrency} text="Uppdatera" buttonColor="green" />
                    </ContainerContent>
                </Container>
            )
        }
    }
}

export default Currency;