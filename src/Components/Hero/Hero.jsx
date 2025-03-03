import React from "react";
import "./Hero.css";
import Hero_img from "../../assets/images/Hero.jpg";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img src={Hero_img} className="hero_img" alt="" />

        <div className="hero_text">
          <h1>Learn Any Language</h1>
          <h1>With LangWay</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officiis
          </p>
          <Link
            activeClass="active"
            to="cards"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <button className="explore_btn">Explore</button>
          </Link>
        </div>
      </div>
    </>
  );
}
