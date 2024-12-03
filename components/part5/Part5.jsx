import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part5Style";
import { gsap } from "gsap/all";

function Part5() {
  let Part5Ref = useRef(null);
  let Hover1Ref = useRef(null);
  let Hover2Ref = useRef(null);

  useEffect(() => {
    let ctx5 = gsap.context(() => {
      let tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: Part5Ref,
          start: "20% 50%",
          end: "100% 50%",
          scrub: true,
          // markers: true,
        },
      });

      tl5
        .to(Hover1Ref, { width: "100%" })
        .to(Hover2Ref, { width: "100%", delay: -0.4 });
    });

    return () => ctx5.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part5Ref = el)}>
      <p>In summary..</p>
      <div className="text-area">
        <h1>A team dedicated to</h1>
        <br />
        <h2>your disposition.</h2>
      </div>
      <div className="text-area-hover">
        <h1 ref={(el) => (Hover1Ref = el)}>A team dedicated to</h1>
        <br />
        <h2 ref={(el) => (Hover2Ref = el)}>your disposition.</h2>
      </div>
    </Wrap>
  );
}

export default Part5;
