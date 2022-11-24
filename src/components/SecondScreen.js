import React, { Component } from "react";

import lowPoly from "../../static/img/low-poly-grid-haikei.png";
import secondImage from "../../static/img/budgeting-3324642.png";

class SecondSreen extends Component {
  render() {
    return (
        <div className="container-fluid app-page" id="screen-2" style={{ position: "relative" }}>
        <img src={lowPoly} className="bg-image-effect" />
        <div className="circle-left" style={{ top: '35px', left: '0'}}></div>
        <div className="circle-right" style={{ bottom: '50px', right: '0'}}></div>
            <img src={ secondImage } className="app-img-2" style={{ filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))" }}/>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ position: 'absolute', top: '0', left: '0'}}>
              <p className="app-text" style={{ marginLeft: "auto"}}>
                  Con el sistema de financiación de prestamos personales, podrás conseguir el crédito que necesitas para tu negocio
                  <a className="btn btn-primary app-btn app-link-to-form" aria-current="page" href="#" style={{     display: 'inline-block',  marginLeft: '30px', marginTop: '18px'}}>Quiero sumarme</a>
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ position: 'absolute', bottom: '0', right: '0'}}>
              <p className="app-text">
                  La forma más fácil de conseguir tu préstamo rápido y confiable, pocas preguntas, riesgos o violaciones de privacidad
                  <a className="btn btn-primary app-btn app-link-to-form" aria-current="page" href="#">Quiero sumarme</a>
              </p>
            </div>
          </div>
            
            


        </div>
    );
  }
}
export default SecondSreen;