import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Landing from './components/Landing/Landing.js';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home.js';

import './styles/main.css';

const App = () => (
  <div className="fullscreen-bg">
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/landing"
          component={Landing}
        />
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/home"
          component={Home}
        />

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;

