import React, { Component } from 'react';
import './App.css';
class contact extends Component {
    constructor(){
        super()
        this.state={
            name:"",phone:"",email:"",mag:"",nameerr:"",phoneerr:"",emailerr:"",msgerr:""
        }
    }
    handlename=(event)=>{
      this.setState({
          name:event.target.value,
          nameerr:""
      })
    }
    handlephone=(event)=>{
        this.setState({
            phone:event.target.value,
            phoneerr:""
        })
      }
      handleemail=(event)=>{
        this.setState({
            email:event.target.value,
            emailerr:""
        })
      }
      handlemsg=(event)=>{
        this.setState({
            msg:event.target.value,
            msgerr:""
        })
      }
      valid=()=>{
        if(this.state.name===""){
            this.setState({nameerr:"Name is Required"});
            return false;
          }
          if(this.state.phone===""){
            this.setState({phoneerr:"Phone Number is Required"});
            return false;
          }
          if(this.state.email===""){
            this.setState({emailerr:"Email Number is Required"});
            return false;
          }
          if(this.state.msge===""){
            this.setState({msgerr:"Message is Required"});
            return false;
          }
          else{
          return true;
          }
      }
      handleSubmit=event=>{
        event.preventDefault();
        if(this.valid()){
          console.log(this.state.name,this.state.phone,this.state.email,this.state.msg);
          this.setState({
            name:"",phone:"",email:"",mag:"",nameerr:"",phoneerr:"",emailerr:"",msgerr:""
    
          })
          alert("Form Submitted Sucessfully");
        }
        
      }
    render() {
        return (
            <div className="container top">
            <div className="row">
                <div className="col-sm-6">
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                <div className="col-sm-12">
                <div className="form-group">
          
          <input type="text" className="form-control" onChange={this.handlename} value={this.state.name} id="fname" placeholder="Name" />
          <small className="text-danger">{this.state.nameerr}</small>
          </div>	
                </div>
                    
                
                </div>
                <div className="row">
                <div className="col-sm-6">
                <div className="form-group">
          
          <input type="email" className="form-control" onChange={this.handleemail} value={this.state.email} id="email" placeholder="Email"/>
          <small className="text-danger">{this.state.emailerr}</small>
          </div>	
                </div>
                    <div className="col-sm-6">
                <div className="form-group">
          
          <input type="text" className="form-control" onChange={this.handlephone} value={this.state.phone} id="phone" placeholder="Phone Number"/>
          <small className="text-danger">{this.state.phoneerr}</small>
          </div>	
                </div>
                </div>
                <div className="form-group">
         
          <textarea className="form-control" rows="4" onChange={this.handlemsg} id="comment" value={this.state.msg} placeholder="Message"></textarea>
          <small className="text-danger">{this.state.msgerr}</small>
        </div>
                <div className="text-center">
                <input type="submit" className="btn btn-primary" value="submit"/>
                </div>
            </form>
                </div>
                <div className="col-sm-6">
                
                
                </div>
                
                </div>
            
            </div>
        );
    }
}

export default contact;