import React from 'react';

const Formcomp = (props) => {
    return (
        <div>
            <form onSubmit={props.loadweather}>
            <div>{props.error ? error() : ""}</div>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Enter City" class="form-control" />
                </div>
                <div class="text-center">
                    <button className="btn btn-outline-primary">Search</button>
                </div>
            </form>
        </div>
    );
};
const error = props => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City...!
      </div>
    );
  };
export default Formcomp;