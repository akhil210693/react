import React from 'react';
import './App.css';
function Footer() {
    return (
        <div>
         <div className="footer mt-5">
	<div className="container">
		<div className="row">
		<div className="col-sm-4">
		<div className="pt-3 pb-3">
			<h1>Quick Links</h1>
			<p><a href="index.html">Home</a></p>
			<p><a href="#">About</a></p>
			<p><a href="#">Gallery</a></p>
			<p><a href="#">Blog</a></p>
			<p><a href="#">Contact</a></p>
			</div>
		
		
		</div>
		<div className="col-sm-4">
		<div className="pt-3 pb-3">
			<h1>Contact Info</h1>
			<p>Address:</p>
			<p>Vizag</p>
			<p>Phonenumber:</p>
			<p>9876543210</p>
			<p>EMail:</p>
			<p>hasdhs@gmial.com</p>
			</div>
		
		
		</div>
		<div className="col-sm-4">
		<div className="pt-3 pb-3">
			<h1>Connect US</h1>
			<i className="fab fa-facebook ficon"></i>
			
			</div>
		
		
		</div>
		
		</div>
		<hr style="color:white;background-color:white;"/>
		<div className="text-center">
		&amp;copy copyrights 2021 reserved
		</div>
	</div>
	</div>   
        </div>
    );
}

export default Footer;