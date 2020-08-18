import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard'

function Login() {
  return (
    <div className="Login">
    <div className="login_page">
    <div className="login-section">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="login-title">Welcome to Aspen</h1>
        <span>
        <input className="inp-1" placeholder="  Email adress"></input> <br></br>
        <input id="input2" className="inp-2" placeholder="  password"></input> <br></br>
        <label for="inp-2"><a id="link-1" href="">Forgot password?</a></label> <br></br>
        </span>
        <button type="submit" className="btn-1">Sign in</button> <br></br>
        <a style={{textDecoration:"underline", fontSize:"80%"}} className="link-2" href="">Privacy policy</a>
  </div>
  </div>
  <div className="login2"></div>
  </div>
  );
}

export default Login;
