import React from 'react';

const Weathercomp = (props) => {
    return (
        <div className="text-center">
            <h2>City:{props.cityname}</h2>
            
            <div className="row">
                <div className="col-sm-6">
                    <h3>Min Temp:{props.temp_min}</h3>
                </div>
                <div className="col-sm-6">
                <h3>Max Temp:{props.temp_max}</h3>
                </div>
            </div>
            <h3>Avg Temp:{props.temp_celsius}</h3>
            <div><i class={`fas ${props.weatherIcon} fa-5x`}></i></div>
            <h3>Description:{props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}</h3>
        </div>
    );
};

export default Weathercomp;