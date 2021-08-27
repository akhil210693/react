import React, { Component } from 'react';
import {connect} from 'react-redux';
class Newcomp extends Component {
    
    styles = {
    fontstyle:"italic",
    color:"violet"
        };
   
    render() {
        return (
            <div>
                <h3 style={this.styles}>{this.props.message}</h3>
                <button onClick={this.props.buttonChange}>Click</button>
            </div>
        );
    }
}
const mapStatetoProps=state=>{
    return{
        message:state.message
    }
}
const mapDispatchtoProps=dispatch=>{
    return{
        buttonChange:()=>dispatch({type:"Message Change"})
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Newcomp);