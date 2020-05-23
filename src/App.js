import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/home">
            <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
