import React from "react";
// import { Data } from "./Data.js";

export default function Card(props) {
  return (
    <>
      <div>
        <tr key={props.id}>
          <td>{props.id}</td>
          <td>{props.first_name}</td>
          <td>{props.last_name}</td>
          <td>{props.phone}</td>
        </tr>
      </div>
    </>
  );
}
