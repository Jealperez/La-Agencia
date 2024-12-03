import React from "react";
import { Wrap } from "./NavStyle";

function Nav() {
  return (
    <Wrap>
      <div className="lft-nav">
        <h1 id="logo">LA AGENCIA</h1>
        <h1>LA AGENCIA</h1>
      </div>
      <div className="rght-nav">
        <h2 id="nav-contact">contact@lAagencia.com</h2>
        <h2>contact@LAagencia.com</h2>
      </div>
    </Wrap>
  );
}

export default Nav;
