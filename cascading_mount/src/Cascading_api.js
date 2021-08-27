import React, { Component } from 'react';

class Cascading_api extends Component {
    constructor(){
        super();
        this.state=({
            DDL1:[],
            DDL2:[],
            selectdd1:'',
            selectdd2:''
        })
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/products").then(resp=>resp.json())
        .then(resp=>this.setState({DDL1:resp}))   
    }
    selectChange(e){
        fetch(`https://fakestoreapi.com/products/`+e.target.value).then(resp=>resp.json())
        .then(resp=>this.setState({DDL2:resp})) 
        .then(resp=>console.log(resp))
        this.setState({selectdd1:e.target.value});
       
    }
    render() {
        return (
            <div>
                <p>Cascading in Class Componets</p>
                <select value={this.state.selectdd1} onChange={this.selectChange.bind(this)}>
                    <option>---Select----</option>
                    {this.state.DDL1.map(x=>(
                        <option value={x.id} key={x.id}>{x.title}</option>
                    ))}
                </select>
                <select value={this.state.selectdd2}>
                    
                    {this.state.DDL2.map(x=>(
                        <option value={x.id} key={x.id}>{x.title}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Cascading_api;
