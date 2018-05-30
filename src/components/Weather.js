import React, { Component } from 'react';
import Container from './styled/Container';
import ContainerHeader from './styled/ContainerHeader';
import ContainerContent from './styled/ContainerContent';
import Paragraph from './styled/Paragraph';

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
        const { latestWeather } = this.state;
        console.log(latestWeather);
        const city = latestWeather.list && latestWeather.city.name;
        const temp = latestWeather.list && latestWeather.list[0].main.temp.toFixed(0);
        const wind = latestWeather.list && latestWeather.list[0].wind.speed;
        const description = latestWeather.list && latestWeather.list[0].weather[0].description;
        const icon = latestWeather.list && <img src={'http://openweathermap.org/img/w/' + latestWeather.list[0].weather[0].icon + '.png'} alt={ description } />;
        
        return (
            <Container background='white' desktopWidth='33.3' tabletWidth='50'>
                <ContainerHeader text='Väder'/>
                <ContainerContent>
                    { icon }
                    <p>{ city }</p>
                    <Paragraph fontSize='2em'>{ temp }°C</Paragraph>
                    <p>Vind: { wind } m/s</p>
                </ContainerContent>
            </Container>
        )
    }
}

export default Weather;