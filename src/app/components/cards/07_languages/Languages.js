import React from 'react';
import "./Languages.scss";

export const Languages = () => {
    const title = "IDIOMAS";

    let languagesData = [
        {
          id: 1,
          description: "Español: Nativo",
        },
        {
          id: 2,
          description: "Ingles: Intermedio",
        },
        {
          id: 3,
          description: "Francés: Básico",
        },
      ];
  return (
    <section className="languagescard">
      <h2 className="languagescard__title">{title}</h2>
      <ul className="languagescard__list">
        {languagesData.map((item) => (
          <li key={item.id} className="languagescard__list--item">
            {item.description}
          </li>
        ))}
      </ul>
    </section>
  )
}
