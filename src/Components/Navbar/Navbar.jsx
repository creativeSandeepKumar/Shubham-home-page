import React from "react";
import Logo from "../../assets/Shop.svg";
import { IoMdRefresh } from "react-icons/io";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav-nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <img className="nav-li-img" src={Logo} alt="Logo" />
        </li>
        <li className="nav-li">Company</li>
        <li className="nav-li">Help</li>
        <li className="nav-li">Shotcuts</li>
        <li className="nav-li">
          <IoMdRefresh />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
