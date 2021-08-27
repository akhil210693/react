import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import './App.css';
import HomeComponent from './pages/HomeComponent';
import AccountComponent from './pages/AccountComponent';
import CardsComponent from './pages/CardsComponent';
import ProtectedRoute from './ProtectedRoute';
import useAuth from './UseAuth';
function App() {
  const [isAuth, login, logout] = useAuth(false)
  return (
    <div className="App">
      <h1>Protected Routes</h1>
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
        {isAuth ? (<><div >You are logged in..</div><button onClick={logout}>Logout</button></>):(<><div >You are logged out..</div><button  onClick={login}>Login</button></>)}
        <Switch>
        <Route path="/" exact component={HomeComponent}/>
        <ProtectedRoute path="/account" component={AccountComponent} auth={isAuth}/>
        <Route path="/card" component={CardsComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
