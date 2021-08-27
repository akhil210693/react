import React from'react';
import logo from './logo.svg';
import './App.css';
import Newcomp from './Newcomp';
class App extends React.Component{
  styles={fontStyle:"bold",color:"teal"}
  render(){
    return(
      <div className="App">
        <h3 style={this.styles}>Welcome</h3>
        <Newcomp/>
      </div>
    )
  }
}

export default App;
