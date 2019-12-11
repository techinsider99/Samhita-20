import React from 'react';
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
