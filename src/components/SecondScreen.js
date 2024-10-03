import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import secondImage from "../../static/img/budgeting-3324642.png";

export default function SecondScreen() {
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
        element.querySelector(".app-img-2"),
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
        element.querySelector(".app-text"),
        {
          opacity: 0,
          y: -300,
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
        <div className="container-fluid app-page" id="screen-2" style={{ position: "relative" }} ref={ref}>
        <div className="circle-left" style={{ top: '35px', left: '0'}}>
        <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
        <div className="circle-right" style={{ bottom: '50px', right: '0'}}>
        <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
            <img src={ secondImage } className="app-img-2" style={{ filter: "drop-shadow(0 8px 32px rgb(0, 0, 0, .37))" }}/>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center" style={{ position: 'absolute', bottom: '0', right: '0', height: '100%'}}>
              <p className="app-text">
                El ahorro es esencial. <br /><br />Te ofrecemos cuentas de ahorro con atractivas tasas de interés para que tu dinero crezca de manera segura.
              </p>
            </div>
          </div>
        </div>
    );
  
}
