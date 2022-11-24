import React, { Component, Fragment } from 'react';

import 'animate.css';


import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import Navbar from './components/Nabvar';
import Header from './components/Header';
import FirstSreen from './components/FirstScreen';
import SecondSreen from './components/SecondScreen';
import ThirdSreen from './components/ThirdScreen';
import FourthSreen from './components/FourthScreen';
import Form from './components/Form';

import User from './pages/User';
import Investor from './pages/Investor';

class App extends Component {
  render() {
    return <div>
          <User></User>

       

    </div>
  }
}
export default App;