import React from "react";
import "./Card.css";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
export default function Card() {
  return (
    <>
      <div className="container">
        {/* box1 */}
        <div className="card-box">
          <div className="card_img">
            <img src={img1} alt="img" className="card_img" />
          </div>
          <div className="card_text">
            <h2>Personalized Learning Styles</h2>
            <p>
              Discover your unique learning preferences—whether you learn best
              through visuals, listening, reading/writing, or hands-on
              activities, we adapt our courses to fit your style.
            </p>
          </div>
        </div>
        {/* box2 */}
        <div className="card-box">
          <div className="card_img" style={{ order: "2" }}>
            <img src={img2} alt="img" className="card_img" />
          </div>
          <div className="card_text">
            <h2>Skill Level Assessments</h2>
            <p>
              Accurately gauge your current English proficiency level with our
              online tests, ensuring you start at the right place for your
              learning journey.
            </p>
          </div>
        </div>
        {/* box3 */}
        <div className="card-box">
          <div className="card_img">
            <img src={img3} alt="img" className="card_img" />
          </div>
          <div className="card_text">
            <h2>Budget-Friendly Options</h2>
            <p>
              Filter courses by your budget to find the best value for your
              investment in language learning without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
