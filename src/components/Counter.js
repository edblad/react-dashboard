import React from 'react';

class Counter extends React.Component {
    state = {
        time: this.props.seconds
    }

    render(){
        return (
            <p>{this.props.seconds}</p>
        )
    }
}

export default Counter;