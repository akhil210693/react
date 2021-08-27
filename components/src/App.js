import React from 'react';
import './App.css';
import FunctionalComp from './components/FunctionalComp';
import {ClassComp1,ClassComp2} from './components/ClassComp';
import ParentComp from './components/ParentComp';
import Click from './components/Click';
function App() {
  return (
    <div>
    <h1>React Components</h1>
    <FunctionalComp></FunctionalComp>
    <ClassComp1></ClassComp1>
    <ClassComp2></ClassComp2>
    <ParentComp></ParentComp>
    <Click></Click>
    </div>
  );
}

export default App;
