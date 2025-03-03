import React from "react";
import "./Hero.css";
import Hero_img from "../../assets/images/Hero.jpg";

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
          <button className="explore_btn">Explore</button>
        </div>
      </div>
    </>
  );
}
