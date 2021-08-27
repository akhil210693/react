import React, { Component } from 'react';

class Regcomp extends Component {
    render() {
        console.log("Regular component renders");
        return (
            <div>
                I am regular component{this.props.name}
            </div>
        );
    }
}

export default Regcomp;