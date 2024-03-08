import React from "react";
import "./About.scss";

export const About = () => {
  const title = "ACERCA DE MÍ";
  const description ="Soy Ingeniero en Sistemas y Computación, con experiencia en el desarrollo de aplicaciones web, \
  ofreciendo soluciones creativas y eficientes, asegurando resultados a través del trabajo enfocado en objetivos para \
  las empresas del sector tecnológico, industrial y organizaciones no gubernamentales (ONGs)."
  return (
    <section className="aboutcard">
      <h2 className="aboutcard__title">{title}</h2>
      <span className="aboutcard__text">{description}</span>
    </section>
  );
};
