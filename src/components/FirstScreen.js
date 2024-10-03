import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import firtsImage from "../../static/img/credit-card-1740012.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function FirstScreen() {
    const ref = useRef(null);
    useEffect(() => {
      const element = ref.current;
      
      gsap.fromTo(
        element.querySelector(".circle-left"),
        {
          transform: "translate(-200px, 0)",
          opacity: 0,
          filter: "blur(20px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
        },
        {
          transform: "translate(30px, 0)",
          opacity: 1,
          filter: "blur(0px) drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.5))",
          scrollTrigger: {
            trigger: element.querySelector(".circle-left"),
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
          transform: "translate(200px, 0)",
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
        element.querySelector(".app-img-1"),
        {
          opacity: 0,
          x: 500,
        },
        {
          opacity: 1,
          x: -100,
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
        element.querySelector(".screen-1"),
        {
          opacity: 0,
          y: 500,
        },
        {
          opacity: 1,
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
        <div className="container-fluid app-page d-flex" id="screen-1" style={{ position: "relative" }} ref={ref}>
        <div className="circle-left" style={{ top: '45px', left: 0}}>
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
        <div className="circle-right" style={{ bottom: '45px', right: 0}}>
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
            <img src={ firtsImage } className="app-img-1" style={{ filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))" }}/>
            <p className="app-text screen-1" style={{ paddingBottom: '200px', marginRight: '500px'}}>
            Ofrecemos tarjetas de crédito y débito <br />con beneficios exclusivos y seguridad avanzada.<br /> <br />Gestiona tu dinero de manera eficiente <br />con nuestros instrumentos financieros.
            </p>

        </div>
    );
  
}