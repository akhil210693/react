import React from 'react';
const UpdateComp=orgcomp=>{
    class NewComp extends React.Component{
        render(){
    return(
        <div>
            <orgcomp name="user"></orgcomp>
        </div>
    )
    }
}
return NewComp;
}
export default UpdateComp;