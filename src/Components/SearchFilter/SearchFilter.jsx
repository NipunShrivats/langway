import React from "react";
import "./SearchFilter.css";

import { GoSearch } from "react-icons/go";
import { LuFilter } from "react-icons/lu";

export default function SearchFilter() {
  return (
    <>
      <div className="filter">
        <h3>
          <span>
            <LuFilter />
          </span>
          Select from the following options..
        </h3>
        <form action="">
          {/* selection-1 */}
          <select name="" id="" className="select1">
            <option value="">Select level</option>
          </select>
          {/* selection-2 */}
          <select name="" id="" className="select2">
            <option value="">Select learning style</option>
          </select>
          {/* selection-3 */}
          <select name="" id="" className="select3">
            <option value="">Add budget</option>
          </select>

          <button className="search_btn">Search</button>
        </form>
      </div>
    </>
  );
}
