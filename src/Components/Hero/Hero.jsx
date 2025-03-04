import React from "react";
import "./Hero.css";
import Hero_img from "../../assets/images/Hero.jpg";
import Add from "../../assets/images/add.jpg";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img src={Hero_img} className="hero_img" alt="" />

        <div className="hero_text">
          <h2>Elevate Your Language Learning Experience</h2>
          <h2>With LangWay</h2>
          <p>
            Personalized language learning that adapts to your unique style,
            ensuring an engaging and efficient educational journey. Choose from
            a variety of languages, take our optional quizzes, and receive
            tailored course recommendations that match your skill level,
            learning preference, and budget.
          </p>
          <Link
            activeClass="active"
            to="cards"
            spy={true}
            smooth={true}
            offset={-190}
            duration={500}
          >
            <button className="explore_btn">Explore Courses</button>
          </Link>
        </div>
      </div>
      <div className="add-holder">
        <span>Sponsered*</span>
        <img src={Add} className="add_img" alt="" />
      </div>
    </>
  );
}
