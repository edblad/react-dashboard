import React, { Component } from 'react';

class Postit extends Component {
    render() {
        return (
            <div className="postit">
                <textarea value={this.props.text} onChange={this.props.saveText} name="text" />
            </div>
        )
    }
}

export default Postit;