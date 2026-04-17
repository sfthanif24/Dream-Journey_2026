import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="Logo" />
        <h1>Food Explorer</h1>
      </div>
      <div className="nav-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#orders">Recipes</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
