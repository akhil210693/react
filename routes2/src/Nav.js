import React from 'react';
import './App.css'
import {NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <div className="bg-dark">
        <div className="container">
           <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <NavLink className="navbar-brand" to="/home" >Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="main" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " activeClassName="main" to="/shop">Shop</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="main" to="/blog">Blog</NavLink>
      </li>    
    </ul>
  </div>  
</nav> 
        </div>
        </div>
    );
};

export default Nav;