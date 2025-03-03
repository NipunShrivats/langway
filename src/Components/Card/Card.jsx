import React from "react";
import "./Card.css";
// import Img1 from "../../assets/images/logo.png";
export default function Card(props) {
  return (
    <div className="card-box">
      <div className="card">
        <div className="card_img">
          <img src={props.image} alt="img" className="card_img" />
        </div>
        <div className="card_text">
          <h2>{props.course_name}</h2>
          {/* <h4>{props.subtitle}</h4> */}
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
