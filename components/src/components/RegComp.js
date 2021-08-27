import React, { Component } from 'react';

class RegComp extends Component {
    render() {
        console.log("Regular Components");
        return (
            <div>
                I am regular component {this.props.name}
            </div>
        );
    }
}

export default RegComp;