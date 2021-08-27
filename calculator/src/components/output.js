import React from 'react';
import OutputRow from './outputRow';
const Output=props=>{
    return(
        <div>
        <OutputRow textSize={{fontsize:'20px'}} value={props.answer}></OutputRow>
        <OutputRow textSize={{fontsize:'30px'}} value={props.user}></OutputRow>
        </div>
    )
}
export default Output;