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
          <a href="/Blog" className="menu-item">Blog</a>
          <a href="/Our team" className="menu-item">Our team</a>
          <a href="/Templates" className="menu-item">Templates</a>
        </div>
        <div className="nav-button">
          <button id="Button-link">make your budget</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

