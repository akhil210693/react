import React from 'react';
import car from './images/car.jpg';

function home(props) {
    return (
        
          <div id="demo" className="carousel slide mt-5" data-ride="carousel">


<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
    
    
</ul>


<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={car} alt="Los Angeles" className="img-fluid"/>
      <div className="carousel-caption">
      <h1>Car1</h1>
      </div>
  </div>
  <div className="carousel-item">
   <img src={car} alt="Los Angeles" className="img-fluid"/>
      <div className="carousel-caption">
      <h1>Car2</h1>
      </div>
  </div>
  <div className="carousel-item">
    <img src={car} alt="Los Angeles" className="img-fluid"/>
      <div className="carousel-caption">
      <h1>Car3</h1>
      </div>
  </div>
    
</div>


<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>


        
    );
}

export default home;