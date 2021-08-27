import React,{Component}  from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Item from './Item';
import Blog from './Blog';
function App(){
  
    return(
      <Router>
     <div className="App">
       
         <Nav/>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/home" exact component={Home}/>
           <Route path="/shop" exact component={Shop}/>
           <Route path="/shop/:id"  component={Item}/>
           <Route path="/blog" exact component={Blog}/>
         </Switch>
      

     </div>
      </Router>
    )
  }


export default App;
