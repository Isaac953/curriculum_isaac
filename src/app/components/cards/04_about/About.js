import React from "react";
import "./About.scss";

export const About = () => {
  const title = "ACERCA DE MÍ";
  const description ="Soy Ingeniero en Sistemas y Computación con experiencia en el área de programación de aplicaciones web \
   en el cual he trabajado en base a objetivos brindando soluciones de manera creativa y optima para empresas de tecnología, \
    industriales y ONGs.";
  return (
    <section className="about-card">
      <h2>{title}</h2>
      <span>{description}</span>
    </section>
  );
};
