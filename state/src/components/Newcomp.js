import React, { Component } from 'react';
import bella from './bella.jpg'
import bellb from './bellb.jpg'

class Newcomp extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"Subscibe to Akhil",
            sub:"Subscribe",
            imgurl:bella
        };
    }
    styles={fontStyle:"italic",color:"purple"}
    Buttonchange=()=>{
        this.setState({
            message:"Click Bell Icon to never miss a update",
            sub:"Subscribed"
        });
    };
    Imgchange=()=>{
        this.setState({
            message:"Thank you,Happy",
            imgurl:bellb
        });
    };
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p/>
                <img style={ { width:"30px"}} src={this.state.imgurl}  alt=""
                onClick={this.Imgchange}></img>
            </div>
        );
    }
}

export default Newcomp;