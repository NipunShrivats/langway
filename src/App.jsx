import React, { useState } from "react";
import { Data } from "./Data.js";

import Card from "./Components/Card/Card.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";

import "./App.css";
export default function App() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <Nav />
      <Hero />

      <div className="card_holder">
        <div className="searchbar">
          <form action="">
            <input
              type="text"
              className=""
              placeholder="Search your course.."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        <div className="cards_">
          {Data.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search);
          }).map((item) => (
            <Card
              id={item.id}
              first_name={item.first_name}
              last_name={item.last_name}
              phone={item.phone}
            />
          ))}
        </div>
      </div>
    </>
  );
}
