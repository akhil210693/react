import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div>
        <div className="bg-dark">
        <div className="container">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/shop">Shop</Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link" to="/blog">Blog</Link>
      </li>    
    </ul>
  </div>  
</nav>
        </div>
        </div>
      
    </div>
  );
}

export default Nav;
