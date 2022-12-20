import React from "react";
import Logo from "../pictures/Logo.png";
import "./HeaderMenu.css";
import Button from "react-bootstrap/Button";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="groupBtn">
        <Button className="donateBtn">BECAME A VOLONTEER</Button>
        <Button className="donateBtn">DONATE HERE</Button>
      </div>
      <>
        <Menu />
      </>
    </div>
  );
};
export default Header;
