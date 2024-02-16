import React from "react";
import "./SoftSkills.scss";

export const SoftSkills = () => {
  const title = "APTITUDES";

  let softSkillsData = [
    {
      id: 1,
      description: "Trabajo en equipo",
    },
    {
      id: 2,
      description: "Proactivo",
    },
    {
      id: 3,
      description: "Capacidad de analisis",
    },
    {
      id: 4,
      description: "Responsable",
    },
    {
      id: 5,
      description: "Toma de decisiones",
    },
    {
      id: 6,
      description: "Orientado a Objetivos",
    },
  ];
  return (
    <section className="softskillscard">
      <h2 className="softskillscard__title">{title}</h2>
      {softSkillsData.map((item) => (
        <div key={item.id} className="softskillscard__sub">
          <span className="contactcard__sub--text">{item.description}</span>
        </div>
      ))}
    </section>
  );
};
