import React, { Component } from 'react';

// function Clock(props) {
//     return (
//         <p>{ props.time.toLocaleTimeString() }</p>
//     )
// }
class Clock extends Component {
    render() {
        return (
            <div className="clock">
               { this.props.time.toLocaleTimeString() }
            </div>
        )
    }
}

export default Clock;