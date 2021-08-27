import React,{Component} from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Akhil"
        }
    }
    componentDidMount(){
        setInterval(()=>{
        this.setState({name:"akhil"});
        },3000);
    }
    render(){
        console.log("This is Parent Component");
        return(
            <div>
            <RegComp name="this.state.name"></RegComp>
            <PureComp name="this.state.name"></PureComp>

            </div>
        )
    }
}
export default ParentComp;