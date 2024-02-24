import React from "react";
import "./Database.scss";

export const Database = () => {
    const title = "BASES DE DATOS";
    let databaseData = [
      {
        id: 1,
        description: "PostgreSQL",
      },
      {
        id: 2,
        description: "MySQL",
      },
      {
        id: 3,
        description: "SQL Server",
      },
    ];
  return (
    <section className="databasecard">
    <h2 className="databasecard__title">{title}</h2>
    <ul className="databasecard__list">
      {databaseData.map((item) => (
        <li key={item.id} className="databasecard__list--item">
          {item.description}
        </li>
      ))}
    </ul>
  </section>
  )
}
