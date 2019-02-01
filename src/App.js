/***********************************************************************************
 *  Purpose         : App.js is main entry point of client side and for route component.
 *  @file           : App.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Registraion from './pages/registraion';
import Dashboard from './pages/dashboard';
import ForgetPassword from './pages/forgetpassword';
import VerifyEmail from './pages/verifyemail'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path="/login" component={Login}></Route>
            <Route path="/registraion" component={Registraion}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/verifyEmail/"  component={VerifyEmail}></Route>
            <Route path="/forgetpassword" component={ForgetPassword}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
