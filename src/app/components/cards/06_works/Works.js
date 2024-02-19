import React from "react";
import "./Works.scss";

export const Works = () => {
  const title = "EXPERIENCIA LABORAL";

  let expecienceData = [
    {
      id: 1,
      position: "Programador .NET C# / Consultor Informático",
      company: "Elementos Industriales S.A de C.V",
      date: "Febrero 2017 - Abril 2019",
      project: "Sistema de Inventario y Facturación.",
    },
    {
      id: 2,
      position: "Programador PHP / Consultor Informático",
      company: "Plan Internacional El Salvador",
      date: "Mayo 2018 - Octubre 2018",
      project: "Aplicación Web SIPAB 2.0 Actualizaciones.",
    },
    {
      id: 3,
      position: "Programador Frontend",
      company: "IMOVES S.A. de C.V.",
      date: "Febrero 2018 - Abril 2018",
      project: "Revisión de aplicaciones existentes.",
    },
    {
      id: 4,
      position: "Pasante del Área de Innovación y Gestión del conocimiento",
      company: "Plan Internacional El Salvador",
      date: "Julio 2016 - Febrero 2017",
      project: "Aplicación Web para gestión de Consultorias.",
    },
  ];
  return (
    <section className="workscard">
      <h2 className="workscard__title">{title}</h2>
      {expecienceData.map((item) => (
        <div key={item.id} className="workscard__history">
          <span className="workscard__history--position">{item.position}</span>
          <span className="workscard__history--company">
            {item.company} | {item.date}
          </span>
          <span className="workscard__history--project">{item.project}</span>
        </div>
      ))}
    </section>
  );
};
