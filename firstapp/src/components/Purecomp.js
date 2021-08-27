import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';

class Purecomp extends PureComponent {
    render() {
        console.log("Pure Component Render");
        return (
            <div>
                I am pure component{this.props.name}
            </div>
        );
    }
}

Purecomp.propTypes = {

};

export default Purecomp;