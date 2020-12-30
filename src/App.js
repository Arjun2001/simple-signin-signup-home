import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Signup} />
      <Route path='/home' component={Home} />
      </div>
    </Router>
    
  );
}

export default App;
