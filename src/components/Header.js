import React, { useState } from "react";
import "../styles/components/Header.css";
import logopssndherr from "../assets/panherr.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-logo">
          <img src={logopssndherr} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">☰</button>
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="#Ideal" className="menu-item">Ideal</a>
          <a href="#templates" className="menu-item">Templates</a>
          <a href="#our-team" className="menu-item">Our team</a>
        </div>
        <div className="nav-button">
          <a href="https://cal.com/evertnnsantts/evortonsantts"><button id="Button-link">Book a call</button></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;


