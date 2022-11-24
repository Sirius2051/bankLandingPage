import React, { Component } from "react";

import Nabvar from "../components/Nabvar";

import Header from '../components/Header';
import FirstSreen from '../components/FirstScreen';
import SecondSreen from '../components/SecondScreen';
import ThirdSreen from '../components/ThirdScreen';
import FourthSreen from '../components/FourthScreen';
import Form from '../components/Form';


class User extends Component {
  render() {
    return (
        <div>

            <Nabvar></Nabvar>
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
export default User;