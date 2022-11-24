import React, { Component } from "react";

import Header from '../components/Header';
import FirstSreen from '../components/FirstScreen';
import SecondSreen from '../components/SecondScreen';
import ThirdSreen from '../components/ThirdScreen';
import FourthSreen from '../components/FourthScreen';
import Form from '../components/Form';

class Investor extends Component {
  render() {
    return (
        <div className="container-fluid app-page d-flex" id="screen-1">
        
            <Header></Header>
            <FirstSreen></FirstSreen>
            <SecondSreen></SecondSreen>
            <ThirdSreen></ThirdSreen>
            <FourthSreen></FourthSreen>
            <Form></Form>

        </div>
    );
  }
}
export default Investor;