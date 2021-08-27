import React, { Component } from 'react';
import {connect} from 'react-redux';
class Newcomp extends Component {
        styles={fontStyle:"italic",color:"purple"}
    
    render() {
        return (
            <div className="App">
              <h3 style={this.styles} >{this.props.message}</h3> 
              <button onClick={this.props.buttonChange}>Subscribe</button>
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