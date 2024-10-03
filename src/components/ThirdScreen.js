import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export default function ThirdSreen() {
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
      element.querySelector(".app-text-2"),
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
      <div className="container-fluid app-page" id="screen-3" style={{ position: "relative" }} ref={ref}>
      <div className="circle-left" style={{ bottom: '39px', left: '0'}}>
      <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
      </div>
        <div className="circle-right" style={{ top: '40px', right: '0'}}>
        <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-bottom d-flex align-items-center" style={{ position: 'absolute', bottom: '100px', left: '0', right: '0', margin: '0 auto', height: '100%'}}>
              <p className="app-text" style={{ paddingBottom: '100px'}}>
                La confianza es clave.<br /><br /> Nos enorgullece nuestra reputación basada en la transparencia y el compromiso con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
    );
}