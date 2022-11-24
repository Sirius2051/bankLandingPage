import React, { Component } from "react";

import { Link } from "react-router-dom";


import logo from "../../static/img/jelpha_logo_3.png";


class Nabvar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand bg-light app-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={ logo } className="app-logo" alt="Jelpha" height="60px" />
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ justifyContent: "flex-end" }}>
                    <ul className="navbar-nav pr-5">
                        <li className="nav-item nav-btn" style={{ marginRight: "3rem"}}>
                            <a className="nav-link btn app-btn app-btn-navbar app-link-to-form" aria-current="page" href="#form-container">Quiero sumarme</a>
                        </li>

                        {/* <li className="nav-item" style={{ marginLeft: "3rem", marginRight: "3rem"}}>
                            <a className="nav-link btn btn-outline-light text-white" aria-current="page" href="#">Quiero realizar prestamos</a>
                        </li> */}
                        
                        
                    </ul>
                </div>
            
            </div>

            {/* <Link to="/">Solicitar un prestamo</Link> */}
            {/* <Link to="/investor">Prestar dinero</Link> */}
        </nav>
    );
  }
}
export default Nabvar;