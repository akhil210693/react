
import React from 'react';
import Classprops  from './Classprops';
import Functioncomp from './Functioncomp';
class App extends React.Component {
  render(){
  return(
   <div>
     <Classprops name="akhil" place="vskp">
     <p>Child Component</p>
     </Classprops>
     <Classprops name="sai" place="hyd"/>
     <Classprops name="sai" place="hyd"/>
     <Functioncomp name="dheeru" place="akp"/>
     </div>
  )
  
}
}

export default App;
