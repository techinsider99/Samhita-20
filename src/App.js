import React from 'react';
<<<<<<< HEAD
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Register from './pages/Register';
import Login from './pages/Login';
import StayTuned from './pages/StayTuned';
import Contact from './pages/Contact';

function App() {
  return (
	<Switch>
		<Route exact path = '/' component = {Home} />
		<Route exact path = '/workshops' component = {Workshops} />
		<Route exact path = '/login' component = {Login} />
		<Route exact path = '/register' component = {Register} />
		<Route exact path = '/stay-tuned' component = {StayTuned} />
		<Route exact path = '/contact' component = {Contact} />
		<Route exact path = '/not-found' component = {Notfound} />
		<Redirect to = '/not-found' />
	</Switch>
  );
}

export default withRouter(App);
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 8e3f451352c921da15cc2b66508b05ea3a67a705
