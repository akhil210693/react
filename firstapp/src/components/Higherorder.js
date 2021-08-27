import React from 'react';
const Updatecom=OriginalComp=>{
 class Newcomp extends React.Component{
     render(){
        return <OriginalComp name="the user"/>;
     }
 }
 return Newcomp;
}
export default Updatecom;