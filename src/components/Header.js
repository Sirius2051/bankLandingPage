import React, { Component } from "react";
import circle from "../../static/img/circle.png";
import lowPoly from "../../static/img/low-poly-grid-haikei.png";
class Header extends Component {
  render() {
    return (
        <div className="container-fluid app-page" id="header-container" style={{ backgroundImage: {circle} }}>
        <img src={lowPoly} className="bg-image-effect" />
        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', transform: 'scale(0.7)', bottom: "-280px", filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))" }}>
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(0, 0, 0, 1)" offset="0%">
                </stop>
                <stop id="stop2" stop-color="rgba(112, 82, 255, 1)" offset="100%"></stop>
                </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d="M28.1,-32.6C36.1,-26.6,42.3,-17.6,42.8,-8.5C43.3,0.6,38,9.7,32.7,18.7C27.3,27.7,21.9,36.4,13.9,40.1C6,43.8,-4.5,42.4,-13.9,38.7C-23.3,35,-31.8,29.1,-35.9,21.1C-40.1,13.1,-39.9,3.1,-38.3,-6.8C-36.6,-16.7,-33.4,-26.3,-26.8,-32.5C-20.1,-38.7,-10.1,-41.3,0,-41.3C10,-41.3,20,-38.5,28.1,-32.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{transition: "all 0.3s ease 0s" }} stroke="url(#sw-gradient)"></path>              </svg>
            <p className=" app-text app-text-header " style={{ zIndex: '1'}}>
                <span className="text-header-1">Accede ahora a tu préstamo solicitándolo desde tu teléfono móvil con tan sólo dos clics</span>
                
                <a className="btn btn-primary app-btn app-btn-header app-link-to-form" aria-current="page" href="#">Quiero sumarme</a>
            </p>
            
            
        </div>
    );
  }
}
export default Header;