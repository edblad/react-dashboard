import React, { Component } from 'react';

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
            this.setState({ latestWeather: data.list[0] })
        })
        .catch(error => {
            console.log(error);
        })
    }

  
    render() {
       console.log(this.state.latestWeather)
        // var data1 = [1, 4, 9, 16];

        // // pass a function to map
        // const map1 = data1.map(x => x * 2);
        
        // console.log(map1);

        //const { searchTerm, data } = this.state;
        //console.log(data);
        // const currentWeather = data.map((item, index) => {
      
        //     // console.log(data)
        //     // console.log(item);
        //     // console.log(index);
        //     return <div key={index}>hej</div>
          
        // });
        
        return (
            <div>Weather {  }</div>
        )
    }
}

export default Weather;