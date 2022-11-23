import React from "react";
import CTA from "./CTA";
import "./Header.css";
import image from "./../../assets/image.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="name">Mohammad Arif</h1>
        <h5>Junior Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={image} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
