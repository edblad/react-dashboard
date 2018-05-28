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
        console.log(this.state.latestWeather.list)


        
        // let newArr = Object.keys(this.state.latestWeather);
        // console.log(newArr);

        Object.keys(this.state.latestWeather).map((key, index) => {
            const myItem = this.state.latestWeather[key]
            // return <MyComponent myItem={myItem} key={index} />
            console.log(myItem);
            console.log(key);
          })

        // const currentWeather = this.state.latestWeather.map((item, index) => {
        //     console.log(item);
        // });




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
            <Container background='white'>
                <ContainerHeader text='Väder'/>
                <ContainerContent>Väder</ContainerContent>
            </Container>
        )
    }
}

export default Weather;