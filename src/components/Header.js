import React from "react";
import logo from "../images/Rick_and_Morty_logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Rick and Morty" />
      <h1 className="header__title">¿Cuánto sabes de tu personaje favorito?</h1>
    </header>
  );
}

export default Header;
