import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      pwd:"",
      nameerror:'',
      pwderror:''
    }
  }
  handlenameChange=(event)=>{
    this.setState({
      name:event.target.value,
      nameerror:''
    })
  }
    handlepwdChange=(event)=>{
      this.setState({
        pwd:event.target.value,
        pwderror:''
      })
  }
  valid=()=>{
    if(this.state.name===""){
      this.setState({nameerror:"Mail is Required"});
      return false;
    }
    if(this.state.pwd===""){
      this.setState({pwderror:"Password is Required"});
      return false;
    }
    else{
    return true;
    }
  }
  handleSubmit=event=>{
    event.preventDefault();
    if(this.valid()){
      console.log(this.state.name,this.state.pwd);
      this.setState({
        name:'',
        pwd:'',
        nameerror:'',
        pwderror:''

      })
      alert("Form Submitted Sucessfully");
    }
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="row">
        <div className="offset-sm-4 col-sm-4">
        <h1 className="text-center">Form Validation</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <input type="email" value={this.state.name} onChange={this.handlenameChange} className="form-control" placeholder="Enter email" id="email"/>
        <p className="text-danger">{this.state.nameerror}</p>
        </div>
        <div className="form-group">
        <input type="password" value={this.state.pwd} onChange={this.handlepwdChange} className="form-control" placeholder="Enter password" id="pwd"/>
        <p className="text-danger">{this.state.pwderror}</p>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" >Submit</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        
      </div>
      
    );
  }
}

export default App;