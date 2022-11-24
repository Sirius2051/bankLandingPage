import React, { Component } from "react";

import lowPoly from "../../static/img/low-poly-grid-haikei.png";
class ThirdSreen extends Component {
  render() {
    return (

      <div className="container-fluid app-page" id="screen-3" style={{ position: "relative" }}>
      <img src={lowPoly} className="bg-image-effect" />
      <div className="circle-left" style={{ bottom: '39px', left: '0'}}></div>
        <div className="circle-right" style={{ top: '40px', right: '0'}}></div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-bottom" style={{ position: 'absolute', bottom: '100px', left: '0'}}>
              <p className="app-text" style={{ paddingBottom: '100px', marginLeft: "auto"}}>
              Soluciones rápidas y confiables personales o para tu negocio. Conoce aquí más sobre nuestros productos y servicios para adelantar tus necesidades de financiamiento
              <a className="btn btn-primary app-btn app-link-to-form" aria-current="page" href="#">Quiero sumarme</a>
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 app-text-center col-bottom-2" style={{ position: 'absolute', bottom: '100px', right: '0'}}>
              <p className="app-text " style={{ paddingBottom: '100px'}} >
              Te ayudamos a ahorrar dinero y pagar las deudas de consumo a una tasa de interes mucho mas baja
              <a className="btn btn-primary app-btn app-link-to-form" aria-current="page" href="#">Quiero sumarme</a>
              </p>
            </div>
          </div>
            
        </div>

      

        
    );
  }
}
export default ThirdSreen;