import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_btns">
          <Link
            activeClass="active"
            to="cards"
            spy={true}
            smooth={true}
            offset={-190}
            duration={500}
          >
            <button>Explore Courses</button>
          </Link>

          <Link
            activeClass="active"
            to="cards"
            spy={true}
            smooth={true}
            offset={-1000}
            duration={500}
          >
            <button>Go to the top</button>
          </Link>
        </div>
        <div className="copyright-tab">
          <p className="copyright">
            © 2025, All rights reserved | <span>LangWay</span>
          </p>
        </div>
      </div>
    </>
  );
}
