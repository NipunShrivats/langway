import React from "react";
import { Data } from "./Data.js";

import Card from "./Components/Card/Card.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import "./App.css";
import Courses from "./Components/Courses/Courses.jsx";
import SearchFilter from "./Components/SearchFilter/SearchFilter.jsx";
export default function App() {
  // console.log(search);

  return (
    <>
      <Nav />
      <Hero />

      <div className="card_holder">
        <div className="searchbar">
          {/* <form action="">
            <span className="filter">
              <LuFilter />
            </span>
            <select name="courses" id="courses">
              <option value="">-- Please select an option --</option>
              <option value="Personalized Learning Styles">
                Personalized Learning Styles
              </option>
              <option value="Skill Level Assessments">
                Skill Level Assessments
              </option>
              <option value="Budget-Friendly Options">
                Budget-Friendly Options
              </option>
            </select>
          </form> */}
          <SearchFilter />
        </div>
        <div className="card_class">
          <Card />
        </div>
      </div>
      <Courses />
      <Footer />
    </>
  );
}
