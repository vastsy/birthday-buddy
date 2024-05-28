import React from "react";

export default function Person({ person }) {
  return (
    <article className="person" key={person.id}>
      <img src={person.image} alt={person.name} className="img" />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} year</p>
      </div>
    </article>
  );
}
