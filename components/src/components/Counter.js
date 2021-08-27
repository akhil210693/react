import React, { Component } from 'react';
import UpdateComp from './HighOrderComp';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    update(){
        this.setState({count:this.state.count+1})
    }
    render() {
        const {count}=this.state;
        return (
            <div>
               <button onMouseEnter={this.update}>{this.props.name} clicked {count} times</button> 
            </div>
        );
    }
}

export default UpdateComp(Counter);