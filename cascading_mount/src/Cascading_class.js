import React, { Component } from 'react';

class Cascading_class extends Component {
    constructor(){
        super();
        this.state=({
            DDL1:[],
            DDL2:[],
            selectdd1:''
        })
    }
    componentDidMount(){
        this.setState({
            DDL1:[
                {name:"India",DDL2:['Delhi','Mumbai','Hyderabad','Vizag']},
                {name:"USA",DDL2:['Newyork','California','Washington DC','Sanfrancisco']},
                {name:"UK",DDL2:['London','Manchester','Glassgow','Liverpool']}
            ]
        })   
    }
    selectChange(e){
        this.setState({selectdd1:e.target.value});
        this.setState({DDL2:this.state.DDL1.find(x => x.name ===e.target.value).DDL2 });
    }
    render() {
        return (
            <div>
                <p>Cascading in Class Componets</p>
                <select value={this.state.selectdd1} onChange={this.selectChange.bind(this)}>
                    <option>---Select----</option>
                    {this.state.DDL1.map(x=>(
                        <option>{x.name}</option>
                    ))}
                </select>
                <select>
                    <option selected disabled>--------</option>
                    {this.state.DDL2.map(x=>(
                        <option>{x}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Cascading_class;