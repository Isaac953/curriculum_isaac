import React from 'react';
import "./Education.scss";

export const Education = () => {
const title = "DATOS ACADÉMICOS";

let educationData = [
    {
      id: 1,
      position: "Centro de Formación Avanzada para Profesionales – FORMÁS",
      company: "Proyecto Upskilling & Reskilling",
      date: "Febrero 2023 - Abril 2023",
      project: "Desarrollo de software con Python HTML, CSS, JavaScript, Rest API.",
    },
    {
      id: 2,
      position: "Platzi Cursos Online Profesionales de Tecnología",
      company: "Cursos especializados en Programación",
      date: "Abril 2021 - Abril 2022",
      project: "Aprender a crear aplicaciones web con Python y JavaScript.",
    },
    {
        id: 3,
        position: "Academia Europea",
        company: "Curso de Ingles de Básico a Intermedio",
        date: "Enero 2018 - Mayo 2019",
        project: "Nivel de Ingles B1.",
      },
      {
        id: 4,
        position: "Universidad Tecnológica de El Salvador",
        company: "Ingeniero en Sistemas y Computación",
        date: "Enero 2011 - Abril 2017",
        project: "Gestión de la seguridad, respaldo y control de acceso para entornos virtualizados.",
        styleClass: "margin-botton",
      },
  ];
  return (
    <section className="educationcard">
      <h2 className="educationcard__title">{title}</h2>
      {educationData.map((item) => (
        <div key={item.id} className={`educationcard__history ${item.styleClass}`}>
          <span className="educationcard__history--position">{item.position}</span>
          <span className="educationcard__history--company">
            {item.company} | {item.date}
          </span>
          <span className="educationcard__history--project">{item.project}</span>
        </div>
      ))}
    </section>
  )
}
