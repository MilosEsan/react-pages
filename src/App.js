import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"; 
import Login from './login_page';
import Profile from "./profile_page";
import Dashboard from './dashboard';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from "react-router-dom";
import {Switch, Route, Link } from "react-router-dom";

function App() {
    return (
      <div className="App">
      <Router>
      
      <Switch>     
         <Route exact path="/" component={Login} />
         <Route exact path="/dashboard" component={Dashboard} />
         <Route exact path="/profile" component={Profile} />
      </Switch>
   
      </Router>
      
    </div>
    );
  }
  
  export default App;
  