import React from "react";

import Nabvar from "../components/Nabvar";
import Header from '../components/Header';
import FirstSreen from '../components/FirstScreen';
import SecondSreen from '../components/SecondScreen';
import ThirdSreen from '../components/ThirdScreen';
import FourthSreen from '../components/FourthScreen';
import Form from '../components/Form';

import logo from '../../static/img/logo.png';

export default function User() {
    return (
        <div>
            <div className="container-loader" id="container-loader" >
                <img src={ logo } className="logo_loader" />
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
            </div>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
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