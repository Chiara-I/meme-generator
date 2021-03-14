import React from "react";
import logo from "./img/hand-spock.svg";

function Header() {
  return (
    <header>
      <img alt="Meme Generator Logo" src={logo} className="logo" />

      <h1>Meme Generator</h1>
    </header>
  );
}

export default Header;
