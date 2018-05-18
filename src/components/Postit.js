import React from 'react';

function Postit(props) {
    return (
        <textarea value={props.value} onChange={props.saveText} name="text" />
    )
}

export default Postit;