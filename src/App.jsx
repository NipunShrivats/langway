import React, { useState } from "react";
import { Data } from "./Data.js";

import Card from "./Components/Card/Card.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import { LuFilter } from "react-icons/lu";

import "./App.css";
export default function App() {
  const [search, setSearch] = useState("");
  // console.log(search);

  return (
    <>
      <Nav />
      <Hero />

      <div className="card_holder">
        <div className="searchbar">
          <form action="">
            {/* <input
              type="text"
              className=""
              placeholder="Search your course.."
              onChange={(e) => setSearch(e.target.value)}
            /> */}

            {/* <label htmlFor="">Choose a course..</label> */}
            <span className="filter">
              <LuFilter />
            </span>
            <select
              name="courses"
              id="courses"
              onChange={(e) => setSearch(e.target.value)}
            >
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
          </form>
        </div>

        <div className="cards_" name="cards">
          {Data.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.course_name.includes(search);
          }).map((item) => (
            <Card
              key={item.id}
              id={item.id}
              course_name={item.course_name}
              subtitle={item.subtitle}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
