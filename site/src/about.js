import React from 'react';
import company from './images/company.jpg';
import {Link} from 'react-router-dom';
import './App.css';
function about() {
    return (
        <div className="container top">
	<div className="row">
		<div className="col-sm-6">
		<img src={company} className="img-fluid"/>
		
		</div>
		<div className="col-sm-6">
		<p className="text-center abttext">Bayerische Motoren Werke AG, commonly referred to as BMW  is a German multinational corporation which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945. </p>
			<div className="text-center">
                <Link to="/about"><button className="btn btn-danger">About</button></Link></div>
		
		</div>
		
		</div>
	
	</div>
    );
}

export default about;