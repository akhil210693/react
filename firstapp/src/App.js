//import logo from './logo.svg';
import './App.css';
import Functionalcomp from './components/functionalcomp';
import {Classcomp,Classcomp1} from './components/classcomp';
import Click from './components/Click';
import Counter from './components/Counter';
import Parentcomp from './components/Parentcomp';

function App() {
  return (
    <div>
    <h1>Hello World</h1>
    <h1>Every HTML Element must be placed in div tags(more than one tag) </h1>
    <h1>React Components</h1>
    <Functionalcomp></Functionalcomp>
    <Classcomp></Classcomp>
    <Classcomp1></Classcomp1>
    <Click></Click>
    <Counter></Counter>
    <Parentcomp></Parentcomp>
    
    </div>
  );
}

export default App;
