import React from "react";
import "./Courses.css";

import First_img from "../../assets/images/first.jpg";
import Second_img from "../../assets/images/second.jpg";
import Third_img from "../../assets/images/third.jpg";

export default function Courses() {
  return (
    <>
      <h1 className="heading">Explore our courses</h1>
      <div className="course_container">
        {/* course1 */}
        <div className="course">
          <h2 className="title">Advanced Literature</h2>
          <div className="cousre_img">
            <img src={First_img} alt="" />
          </div>

          <div className="cousre_text">
            <span>Recomended for:-</span>
            <h2>
              <span>Level : </span>8+
            </h2>
            <h2>
              <span>Style : </span>Read/Write
            </h2>
            <span>Learn More...</span>
          </div>
        </div>
        {/* course2 */}
        <div className="course">
          <h2 className="title">Parts of Speech</h2>
          <div className="cousre_img">
            <img src={Second_img} alt="" />
          </div>

          <div className="cousre_text">
            <span>Recomended for:-</span>
            <h2>
              <span>Level : </span>3-4
            </h2>
            <h2>
              <span>Style : </span>visual
            </h2>
            <span>Learn More...</span>
          </div>
        </div>
        {/* course3 */}
        <div className="course">
          <h2 className="title">Vocabulary</h2>
          <div className="cousre_img">
            <img src={Third_img} alt="" />
          </div>

          <div className="cousre_text">
            <span>Recomended for:-</span>
            <h2>
              <span>Level : </span>5-7
            </h2>
            <h2>
              <span>Style : </span>Auditory
            </h2>
            <span>Learn More...</span>
          </div>
        </div>
      </div>
    </>
  );
}
