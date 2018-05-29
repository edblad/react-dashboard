import React from 'react';
import TextArea from './styled/TextArea';

function Postit(props) {
    return ( 
        <TextArea value={props.value} onChange={props.saveText} placeholder='Anteckningar' width='75' />
    )
}

export default Postit;