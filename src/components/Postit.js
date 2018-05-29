import React, { Component } from 'react';
import TextArea from './styled/TextArea';

class Postit extends Component {
    state = {
        postitText: localStorage.getItem('text')
    }
    
    saveText = (event) => {
        this.setState({ postitText: event.target.value });
        localStorage.setItem('text', event.target.value);
    }

    render() {
        return ( 
            <TextArea value={this.state.postitText} onChange={this.saveText} placeholder='Anteckningar' />
        )
    }
}

export default Postit;