import React from 'react';
import './App.css';
import Nav from './Nav';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import home from './home';
import about from './about';
import gallery from './gallery';
import contact from './contact';
import shop from './shop';
import Item from './itemdetails';
//import Footer from './Footer';
function App() {
  return (
    <div className="App">
    <Router>
   
      <Nav/>
     <Switch>
       <Route path="/" exact component={home}/>
       <Route path="/home" exact component={home}/>
       <Route path="/about" exact  component={about}/>
       <Route path="/gallery" exact  component={gallery}/>
       <Route path="/contact" exact  component={contact}/>
       <Route path="/shop" exact  component={shop}/>
       <Route path="/shop/:id" component={Item}/>
     </Switch>
   
   
    </Router>
    
    </div>
  );
}

export default App;
