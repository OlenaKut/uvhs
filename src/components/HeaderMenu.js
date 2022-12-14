import React from "react";
import Logo from "../pictures/Logo.png";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
  );
};
export default HeaderMenu;
