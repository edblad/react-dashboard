import React, { Component } from 'react';

class Weather extends Component {
    state = {
        data: ''
    }

    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=2673722&APPID=32f9c59ac069b4b06223120ca2052ef5')
        .then(response => response.json())
        .then((data) => {
            this.setState({ data: data })
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>Weather</div>
        )
    }
}

export default Weather;