import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part6Style";
import { gsap } from "gsap/all";
import AVATAR1 from "../../asset/img/avatar1.png";
import AVATAR2 from "../../asset/img/avatar2.png";
import AVATAR3 from "../../asset/img/avatar3.png";

function Part6() {
  let Part6Ref = useRef(null);
  let Content6Ref = useRef(null);

  useEffect(() => {
    let ctx6 = gsap.context(() => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: Part6Ref,
          start: "0% 70%",
          end: "15% 50%",
          scrub: 1,
          // markers: true,
        },
      });

      tl6.to(Content6Ref, { height: "0%" });
    });

    return () => ctx6.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part6Ref = el)}>
      <div className="rounded-div-wrapper-6" ref={(el) => (Content6Ref = el)}>
        <div className="rounded-div-6" />
      </div>

          <div className="brand-part-6">
              {/* <div className="tooltip">Hover over me
              <span className="tooltiptext">Tooltip text</span>
              </div> */}
            <div className="top-brand-part-6">
              
              <div className="lft-top-6">
                <img src={AVATAR1} alt="avatar1" className="avatares" />
              </div>
              <div className="rght-top-6">
                <h1>JESUS PEREZ</h1>
                {/* <button>View Pricing</button> */}
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>Architect &amp; Web Designer | Developer Fullstack</h2>
                <div className="content-rght-btm-6">
                  <p>
                    Designer 3d.<br />  
                    Designer Digital <br />
                    Diseño web centrado en UX/UI. <br />
                    Desarrollo web responsive y optimización SEO. <br />
                    Soluciones digitales personalizadas para empresas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-part-6">
            <div className="top-brand-part-6">
              <div className="lft-top-6">
              <img src={AVATAR2} alt="avatar2" className="avatares" />
              </div>
              <div className="rght-top-6">
              <h1>DANIELA PEREZ</h1>
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>Comunicadora Social | Project Manager &amp; Social Media Expert</h2>
                <div className="content-rght-btm-6">
                  <p>
                  Gestión de proyectos ágiles <br />
                  Marketing en redes sociales <br />
                  Gestión de contenido. <br />
                  Análisis de SEO y métricas <br />
                  Creación de contenido digital.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-part-6">
            <div className="top-brand-part-6">
              <div className="lft-top-6">
              <img src={AVATAR3} alt="avatar3" className="avatares" />
              </div>
              <div className="rght-top-6">
                  <h1>MARIA PEREZ</h1>
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>HR Specialist &amp; Web Developer</h2>
                <div className="content-rght-btm-6">
                  <p>
                  Desarrollo web. <br />
                  Diseño (UX) y (UI). <br />
                  Optimización web/móvile y SEO. <br />
                  Optimizacion de recursos humanos. <br />
                  Gestión de talento/procesos de recursos humanos digitales.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="brand-part-6">
            <div className="top-brand-part-6">
              <div className="lft-top-6">
                <h1>Marketing </h1>
              </div>
              <div className="rght-top-6">
                <button>View Pricing</button>
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>1-2 months average / 8 design sprints</h2>
                <div className="content-rght-btm-6">
                  <p>
                  Pitch deck design  <br />
                  Social media <br />
                  Email design <br />
                  Tradeshow assets <br />
                  Brochures  <br />
                  Signage
                  </p>
                </div>
              </div>
            </div>
          </div>

    </Wrap>
  );
}

export default Part6;
