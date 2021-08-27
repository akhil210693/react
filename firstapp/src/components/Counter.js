import React, {Component} from 'react';
import Updatecom from './Higherorder';
export class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    UpdateClick = () => {
       this.setState({ count: this.state.count+1});
    };
    render(){
        const { count }=this.state;
        return <div>
            <button onMouseEnter={this.UpdateClick}>{this.props.name}  increment {count} times</button>
            </div>
    }
}
export default Updatecom(Counter);