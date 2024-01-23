import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faGlobe, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Cards.scss";

let contactData = [
  {
    id: 1,
    icon: faPhone,
    description: "+503 7989-9172",
  },
  {
    id: 2,
    icon: faEnvelope,
    description: "isaac.arias07@gmail.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    description: "Perfil de Linkedin",
  },
  {
    id: 4,
    icon: faLocationDot,
    description: "Apopa, San Salvador",
  },
  {
    id: 5,
    icon: faGlobe,
    description: "Sitio Web",
  },
  {
    id: 6,
    icon: faFileLines,
    description: "Certificados",
  },
];

export const Contact = () => {
  return (
    <section className="contact">
    <h2>Contacto</h2>
      {contactData.map((item) => (
        <div key={item.id}>
          <FontAwesomeIcon icon={item.icon} className="font-icon" />
          <span>{item.description}</span>
        </div>
      ))}
    </section>
  );
};
