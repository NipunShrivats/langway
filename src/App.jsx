import React, { useState } from "react";
import Card from "./Card";
import { Data } from "./Data.js";

export default function App() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div>
      <div>
        <h1>LangWay</h1>
      </div>

      <div className="searchbar">
        <form action="">
          <input
            type="text"
            className=""
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
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
  );
}
