import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.scss";
import Link from "next/link";

export const Contact = () => {
  const title = "CONTACTO";

let contactData = [
  {
    id: 1,
    icon: faPhone,
    description: "(503) 7989-9172",
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
    url: "https://www.linkedin.com/in/isaac-arias-6884a2149",
  },
  {
    id: 4,
    icon: faGlobe,
    description: "Sitio Web",
    url: "https://isaac953.github.io/Portfolio_Angular/home"
  },
  {
    id: 5,
    icon: faLocationDot,
    description: "Apopa, San Salvador",
  },
  // {
  //   id: 6,
  //   icon: faFileLines,
  //   description: "Certificados",
  //   url: "https://drive.google.com/drive/folders/1TZRT3fDr4ssvVEgzzyvSfofsoNMXS9pU"
  // },
];
  return (
    <section className="contact-card">
      <h2 className="contact-title">{title}</h2>
      {contactData.map((item) => (
        <div key={item.id} className="contact-subcard">
          <FontAwesomeIcon icon={item.icon} className="font-icon" />

          {/* url Hidden no exist */}
          {item.url ? (
            <Link href={{ pathname: item.url }} target="_blank" title={item.description}>
              {item.description}
            </Link>
          ) : (
            <span>{item.description}</span>
          )}
        </div>
      ))}
    </section>
  );
};
