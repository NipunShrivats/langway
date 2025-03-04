import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Nav.css";

import { Link } from "react-scroll";

export default function Nav() {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img src={Logo} alt="logo" className="img" />
          <h2 className="logo_name">
            Lang <span>Way</span>
          </h2>
        </div>

        <div className="menu">
          <ul>
            <li className="home">Home</li>
            <li className="about">About</li>
            <li className="contact">Contact</li>
            <li className="explore">
              <Link
                activeClass="active"
                to="cards"
                spy={true}
                smooth={true}
                offset={-190}
                duration={500}
              >
                Explore Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
