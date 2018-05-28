import React, { Component } from 'react';

// class SearchForm extends Component {
//   state = {
//     data: [],
//     searchTerm: '' //value={this.state.searchTerm}
//   }

//   componentDidMount() {
//     this.getDataFromApi(); //When <App /> is in the DOM, load the data
//   }

//   getDataFromApi = () => {
//     fetch('https://fed17.herokuapp.com/top-movies?_limit=20')
//       .then(response => response.json())
//       .then(data => {
//         //When we are sure we have the data
//         this.setState({ data: data });  
        
//       })
//       .catch(error => {
//         //Else we can save an error to display later
//         this.setState({ error: error })
//       })
//   }
//   //Handle input onchange, searchTerm === <input name="searchTerm" />
//   onChange = e => this.setState({ searchTerm : e.target.value})

//   render() {
//     //const { searchTerm, data } = this.state; 
//     const list = this.state.data.map((item, index) => {
      
//          //console.log(this.state.data)
//          //console.log(item);
//          //console.log(index);
//         return <div key={index}>{item.name} </div>
      
//     });

   
//     return (
//       <div className="App">
//         { list } {/* List is reference to the created array above*/}
//         <input type="text" onChange={this.onChange} value={this.state.searchTerm} />
//       </div>
//     );
//   }
// }

// export default SearchForm;


function Playlists(props){
    return props.playlists.map((playlist) => {
      if (playlist.title.includes(props.searchTerm)) {
        return (
          <div key={playlist._id}> { /* key is always needed */}
            <p> {playlist.title} </p>
            <p> {playlist.genres.join(', ')} </p> { /* .join() will create a string out of the array */}
          </div>
        );
      }
      return null;
    });
  }