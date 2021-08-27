import React from 'react';
import car from './images/car.jpg';
import './App.css';
import {Link} from 'react-router-dom';
function gallery() {
    return (
        <div className="container top" >
	<div className="row">
	<div className="col-sm-4">
		<div className="pro">
		<img src={car} className="img-fluid"/>
		<div className="text-center">
			<h1>Car</h1>
			<h3>Rs2500000</h3>
			<button className="btn btn-success">Buy</button>
			</div>
		</div>
		
		</div>
	<div className="col-sm-4">
		<div className="pro">
		<img src={car} className="img-fluid"/>
		<div className="text-center">
			<h1>Car</h1>
			<h3>Rs2500000</h3>
			<button className="btn btn-success">Buy</button>
			</div>
		</div>
		
		</div>
		<div className="col-sm-4">
		<div className="pro">
		<img src={car} className="img-fluid"/>
		<div className="text-center">
			<h1>Car</h1>
			<h3>Rs2500000</h3>
			<button className="btn btn-success">Buy</button>
			</div>
		</div>
		
		</div>
	</div>
	<div className="text-center mt-3"><Link to="gallery"><button className="btn btn-danger">More Products</button></Link></div>
	</div>
    );
}

export default gallery;