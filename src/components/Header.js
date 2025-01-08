import React from "react";
import '../styles/components/Header.css';

function Header(){
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-logo"></div>
        <a href="/" className="menu-item">Blog</a>
        <a href="/about" className="menu-item">Our team</a>
        <a href="/projects" className="menu-item">Templates</a>
        <div className="nav-button"><button>make your budget</button></div>
      </nav>
    </header>
  );
}

export default Header;
