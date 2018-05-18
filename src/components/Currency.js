import React from 'react';

function Currency(props) {
    return props.currencyData.map((data) => {
        return (
            <div> 
                <p>{data.base}</p>
            </div>
        );
    });
}

// class Currency extends Component {
    
//     // componentDidMount() {
//     //     this.getDataFromApi();
//     // }
    
//     // getDataFromApi = () => {
//     //     fetch('http://data.fixer.io/api/latest?access_key=fe21b7321aa53d1a4dd706d7fff65038')
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         this.setState({ data: data });  
//     //     })
//     //     .catch(error => {
//     //         console.log(error);
//     //     })
//     // }

//     render() {
//         return (
//             <div className="currency"></div>
//         )
//     }
// }

export default Currency;