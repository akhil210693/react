import React from 'react';

function Functioncomp(props) {
    return (
        <div>
            <h3>This is functional component</h3>
            <h3>Hello {props.name} from {props.place} welcome to react</h3>
        </div>
    );
}

export default Functioncomp;