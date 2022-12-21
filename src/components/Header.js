import React from "react";
import Logo from "../pictures/Logo.png";
import "./HeaderMenu.css";
import Button from "react-bootstrap/Button";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <div className="header container-fluid d-flex justify-content-between">
      <div>
        {" "}
        <img src={Logo} alt="Logo" className="logo" />
        <Button className="donate">BECOME A VOLONTEER</Button>
        <Button className="donate">DONATE HERE</Button>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};
export default Header;
