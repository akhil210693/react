import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import './App.css';
import HomeComponent from './pages/HomeComponent';
const AccountComponent=React.lazy(()=>import('./pages/AccountComponent'));
const CardsComponent=React.lazy(()=>import('./pages/CardsComponent'));
function App() {
  return (
    <div className="App">
      <h1>Lazy Loading</h1>
      <Router>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account (Protected)</Link>
          </li>
          <li>
            <Link to="/card">Card (Not Protected)</Link>
          </li>
        </ul>
       
          <React.Suspense fallback>

        <Route exact path="/" ><HomeComponent/></Route>
       
        <Route path="/account"><AccountComponent/></Route>
        <Route path="/card"><CardsComponent/></Route>
        </React.Suspense>
        
      </Router>
    </div>
  );
}

export default App;
