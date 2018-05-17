import React, { Component } from 'react';

class Postit extends Component {
    render() {
        return (
            <textarea value={this.props.value} onChange={this.props.saveText} name="text" />
        )
    }
}

export default Postit;