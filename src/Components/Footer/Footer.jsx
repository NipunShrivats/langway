import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Link
          activeClass="active"
          to="cards"
          spy={true}
          smooth={true}
          offset={-150}
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
    </>
  );
}
