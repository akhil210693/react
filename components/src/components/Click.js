import React, { Component } from 'react';
import UpdateComp from './HighOrderComp';
class Click extends Component {
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
               <button onClick={this.update}>{this.props.name} clicken {count} times</button> 
            </div>
        );
    }
}

export default UpdateComp(Click);