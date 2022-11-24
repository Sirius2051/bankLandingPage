import React, { Component } from "react";

import lowPoly from "../../static/img/low-poly-grid-haikei.png";
import firtsImage from "../../static/img/credit-card-1740012.png";


class FirstSreen extends Component {
  render() {
    return (
        <div className="container-fluid app-page d-flex" id="screen-1" style={{ position: "relative" }}>
        <img src={lowPoly} className="bg-image-effect" />
        <div className="circle-left" style={{ top: '39px', left: '0'}}></div>
        <div className="circle-right" style={{ bottom: '-150px', right: '0'}}></div>
            <img src={ firtsImage } className="app-img-1" style={{ filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))" }}/>
            <p className="app-text screen-1" style={{ paddingBottom: '200px', marginRight: '500px'}}>
                Está cansado de volver cada mes a casa sin dinero? Haz clic en el siguiente enlace y consigue un préstamo
                <a className="btn btn-primary app-btn app-link-to-form" aria-current="page" href="#">Quiero sumarme</a>
            </p>

        </div>
    );
  }
}
export default FirstSreen;