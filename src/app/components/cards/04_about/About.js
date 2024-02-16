import React from "react";
import "./About.scss";

export const About = () => {
  const title = "ACERCA DE MÍ";
  const description ="Soy Ingeniero en Sistemas y Computación con experiencia en el área de programación de aplicaciones web \
   en el cual he trabajado en base a objetivos brindando soluciones de manera creativa y optima para empresas de tecnología, \
    industriales y ONGs.";
  return (
    <section className="aboutcard">
      <h2 className="aboutcard__title">{title}</h2>
      <span className="aboutcard__text">{description}</span>
    </section>
  );
};
