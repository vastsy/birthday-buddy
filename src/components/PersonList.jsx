import React from "react";
import data from "../data.js";
import Person from "./Person.jsx";
import { useState } from "react";

export default function PersonList() {
  const [people, setPeople] = useState(data);

  const handleClearAll = () => {
    setPeople([]);
  };

  return (
    <section className="container">
      <h3>{people.length} Birthdays Today</h3>

      {people.map((person) => {
        return <Person person={person} />;
      })}

      <button className="btn btn-block" onClick={handleClearAll}>
        Clear All
      </button>
    </section>
  );
}
