import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img src={Logo} alt="logo" className="img" />
          <h2 className="logo_name">LangWay</h2>
        </div>

        <div className="menu">
          <ul>
            <li className="home">Home</li>
            <li className="explore">Explore</li>
          </ul>
        </div>
      </div>
    </>
  );
}
