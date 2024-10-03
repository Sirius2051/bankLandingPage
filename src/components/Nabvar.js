import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import logo from "../../static/img/logo.png";

export default function Nabvar() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element,
            {
                borderRadius: 0,
            },
            {
                borderRadius: '0 0 40px 40px',
                scrollTrigger: {
                    trigger: element,
                    start: "+=50%",
                    end: "+=100%",
                    scrub: true,
                },
            },
        );
    }, []);
    return (
        <nav className="navbar navbar-expand bg-light app-navbar p-0" ref={ref}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={ logo } className="app-logo ml-5" alt="Banco Futuro" height="60px" />
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ justifyContent: "flex-end" }}>
                    <ul className="navbar-nav pr-5">
                        <li className="nav-item nav-btn p-3" style={{ marginRight: "3rem"}}>
                            <a className="nav-link btn app-btn app-btn-navbar app-link-to-form text-uppercase py-2" aria-current="page" href="#form-container">Quiero unirme</a>
                        </li>
                    </ul>
                </div>
            
            </div>

        </nav>
    );

}
