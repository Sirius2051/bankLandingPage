import React, { Component } from "react";

import lowPoly from "../../static/img/low-poly-grid-haikei.png";

import thirdImage from "../../static/img/e-payment-1445663-1445663.png";


class FourthSreen extends Component {
  render() {
    return (

      <div className="container-fluid app-page" id="screen-4" style={{ position: "relative" }}>
      <img src={lowPoly} className="bg-image-effect" />
      <div className="circle-left" style={{ top: '40px', left: '0'}}></div>
        <div className="circle-right" style={{ bottom: '40px', right: '0'}}></div>
            <img src={ thirdImage } className="app-img-3" style={{ filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))" }} />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 container-more-top" style={{ position: 'absolute', top: '200', left: '0', top: '25%'}}>
              <p className="app-text" style={{ marginLeft: "auto"}}>
              Aprende a administrar tu dinero y pagalo con la menor tasa fija
              <a className="btn btn-primary app-btn app-link-to-form" aria-current="page" href="#">Quiero sumarme</a>
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ position: 'absolute', bottom: '0', right: '0'}}>
              <p className="app-text">
              Consigue el financiamiento que necesita
              <a className="btn btn-primary app-btn app-link-to-form" aria-current="page" href="#">Quiero sumarme</a>
              </p>
            </div>
          </div>
            
        </div>


        
    );
  }
}
export default FourthSreen;