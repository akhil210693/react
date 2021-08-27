import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import logo from './images/logo.png'

function Nav() {
    return (
        <div>
            <div className="bg-dark fixed-top">
                <div class="container">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#"><img src={logo} height="70px"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link  className="nav-link" to="/home">
            Home
        </Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to="/about">
            About
        </Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to="/shop">
            Shop
        </Link>
      </li> 
      <li className="nav-item">
      <Link  className="nav-link" to="/gallery">
            Gallery
        </Link>
      </li>    
      <li className="nav-item">
      <Link  className="nav-link" to="/contact">
            Contact
        </Link>
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