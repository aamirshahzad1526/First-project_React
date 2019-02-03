import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './component/Sign_in/Sign_in';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
     <div className="App">
        <Signin/>
      </div>
    );
  }
}

export default App;
