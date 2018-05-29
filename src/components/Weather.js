import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';

class Weather extends Component {
    state = {
        latestWeather: [],
        searchTerm: ''
    }

    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?units=metric&id=2673722&APPID=32f9c59ac069b4b06223120ca2052ef5')
        .then(response => response.json())
        .then((data) => {
            this.setState({ latestWeather: data })
        })
        .catch(error => {
            console.log(error);
        })
    }

  
    render() {
        console.log(this.state.latestWeather);
        const temp = this.state.latestWeather.list && this.state.latestWeather.list[0].main.temp;
        
        return (
            <Container background='white' width='33.3'>
                <ContainerHeader text='Väder'/>
                <ContainerContent>
                    <p>Temperatur: { temp }</p>
                </ContainerContent>
            </Container>
        )
    }
}

export default Weather;