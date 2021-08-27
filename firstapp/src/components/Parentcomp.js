import React, { Component } from 'react';
import Purecomp from './Purecomp';
import Regcomp from './Regcomp';
class Parentcomp extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"akhil"
        }
    }
    componentDidMount(){
        setInterval(()=>{
        this.setState({name:"akhil"});
        },3000);
    }
    render() {
        console.log("parent component render");
        return (
            <div>
                I am parent component
                <Regcomp name="this.state.name"/>
                <Purecomp name="this.state.name"/>
            </div>
        );
    }
}

export default Parentcomp;
