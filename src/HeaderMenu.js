import React from "react";
import Logo from "./Logo.png";
import "./HeaderMenu.css";

export default function HeaderMenu() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
  );
}
