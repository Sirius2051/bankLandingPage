import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";


export default function Form() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const ref = useRef(null);
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector(".app-text"),
        {
          scale: 1.5,
          opacity: 0,
          filter: "blur(20px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          y: -20,
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          y: 0,
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
        element.querySelector("#sw-js-blob-svg-1"),
        {
          rotation: 90,
          opacity: 0,
          filter: "blur(20px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          y: -20,
        },
        {
          rotation: 0,
          opacity: 1,
          filter: "blur(0px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          y: 0,
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
        <div className="container-fluid app-page pb-5" id="form-container" ref={ref}>
            <svg id="sw-js-blob-svg-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', transform: 'scale(0.6)', filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))", top: "-40%" }}>
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(0, 0, 0, 1)" offset="0%">
                </stop>
                <stop id="stop2" stop-color="rgba(255, 11, 98, 1)" offset="100%"></stop>
                </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d="M28.1,-32.6C36.1,-26.6,42.3,-17.6,42.8,-8.5C43.3,0.6,38,9.7,32.7,18.7C27.3,27.7,21.9,36.4,13.9,40.1C6,43.8,-4.5,42.4,-13.9,38.7C-23.3,35,-31.8,29.1,-35.9,21.1C-40.1,13.1,-39.9,3.1,-38.3,-6.8C-36.6,-16.7,-33.4,-26.3,-26.8,-32.5C-20.1,-38.7,-10.1,-41.3,0,-41.3C10,-41.3,20,-38.5,28.1,-32.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{transition: "all 0.3s ease 0s" }} stroke="url(#sw-gradient)"></path>              </svg>
                <div className="col-11 col-sm-11 col-md-6 col-lg-6 col-xl-6 ml-auto mr-auto d-flex align-items-center" style={{ zIndex: '1', height: '100%', overflow: 'hidden' }}>
                      
                    <p className="app-text screen-1" style={{ paddingTop: '200px', width: '100%'}}>
                      Regístrate hoy en Banco Futuro <br />y comienza a disfrutar de todas nuestras ventajas. <br /><br />Nuestro proceso es rápido y sencillo.
                      <a className="btn btn-primary app-btn text-uppercase btn-lg" href="#" target="_blank" >Registro</a>
                    </p>

                </div>
              


        </div>
    );
}