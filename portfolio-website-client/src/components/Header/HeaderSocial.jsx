import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_black">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_black">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_black">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
