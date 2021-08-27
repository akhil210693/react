import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Blog from './blog';
import Item from './Itemdetail';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:id" component={Item}/>
      <Route path="/blog" exact component={Blog}/>
    
    </Switch>
    </div>
    </Router>
  );
}

export default App;
