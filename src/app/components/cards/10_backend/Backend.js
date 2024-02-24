import React from "react";
import "./Backend.scss";

export const Backend = () => {
    const title = "BACKEND";
    let backendData = [
      {
        id: 1,
        description: "Python",
      },
      {
        id: 2,
        description: "PHP",
      },
      {
        id: 3,
        description: "Node JS",
      },
      {
        id: 4,
        description: "C#",
      },
      {
        id: 5,
        description: "DJango",
      },
      {
        id: 6,
        description: "FastAPI",
      },
      {
        id: 7,
        description: "Laravel",
      },
      {
        id: 8,
        description: "Express JS",
      },
      {
        id: 9,
        description: ".NET Core",
      },
    ];
  return (
    <section className="backendcard">
    <h2 className="backendcard__title">{title}</h2>
    <ul className="backendcard__list">
      {backendData.map((item) => (
        <li key={item.id} className="backendcard__list--item">
          {item.description}
        </li>
      ))}
    </ul>
  </section>
  )
}
