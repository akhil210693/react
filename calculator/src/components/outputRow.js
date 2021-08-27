import React from 'react';
import './outputRow.css';
const OutputRow=props=>{
    return(
        <div className="form-group">
        <input type="text" readOnly className="form-control" style={props.textSize} value={props.value}></input>
        </div>
    )
}
export default OutputRow;