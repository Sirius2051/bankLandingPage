import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import thirdImage from "../../static/img/e-payment-1445663-1445663.png";


export default function FourthSreen() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const ref = useRef(null);
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector(".circle-left"),
        {
          transform: "translate(0, 200px)",
          opacity: 0,
          filter: "blur(20px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          x: "-50% !important",
        },
        {
          transform: "translate(30px, 0)",
          opacity: 1,
          filter: "blur(0px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          x: "0 !important",
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        },
      );
    }, []);
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector(".circle-right"),
        {
          transform: "translate(200px, 200px)",
          opacity: 0,
          filter: "blur(20px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          // x: "-50% !important",
        },
        {
          transform: "translate(-30px, 0)",
          opacity: 1,
          filter: "blur(0px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          // x: "0 !important",
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        },
      );
    }, []);
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector(".app-img-3"),
        {
          opacity: 0,
          x: 500,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        },
      );
    }, []);
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector(".app-text"),
        {
          opacity: 0,
          x: -300,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        },
      );
    }, []);

    return (
      <div className="container-fluid app-page" id="screen-4" style={{ position: "relative" }} ref={ref}>
      <div className="circle-left" style={{ top: '40px', left: '0'}}>
      <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
      </div>
        <div className="circle-right" style={{ bottom: '40px', right: '0'}}>
        <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
            <img src={ thirdImage } className="app-img-3" style={{ filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))" }} />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 container-more-top" style={{ position: 'absolute', top: '200', left: '0', top: '25%', height: '100%'}}>
              <p className="app-text" style={{ marginLeft: "auto"}}>
                Gestiona tus finanzas fácilmente con nuestras herramientas digitales y disfruta de beneficios exclusivos como descuentos y promociones.
              </p>
            </div>
          </div>
            
        </div>


        
    );
}