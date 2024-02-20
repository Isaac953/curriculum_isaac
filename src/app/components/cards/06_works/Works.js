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
      activities: [
        {
          idt: 1,
          tasks: "Diseñar un diagrama para la creación de base de datos MySQL.",
        },
        {
          idt: 2,
          tasks: "Hacer migración de datos con C# de CSV a MySQL.",
        },
        {
          idt: 3,
          tasks:
            "Crear con C# Windows Form las vistas y funciones del sistema.",
        },
        {
          idt: 4,
          tasks: "Generar reportes en PDF por medio de ItextSharp.",
        },
        {
          idt: 5,
          tasks:
            "Implementar el proceso para el ajuste de inventario de productos.",
        },
        {
          idt: 6,
          tasks: "Crear un instalador embebido con InnoSetup.",
        },
        {
          idt: 7,
          tasks: "Instalar y gestionar archivos en el servidor principal.",
        },
        {
          idt: 8,
          tasks: "Integrar manuales y notas de cada versión en el Sistema.",
        },
        {
          idt: 9,
          tasks:
            "Hacer reuniones de seguimiento para validar productos entregados.",
        },
      ],
    },
    // {
    //   id: 2,
    //   position: "Programador PHP / Consultor Informático",
    //   company: "Plan Internacional El Salvador",
    //   date: "Mayo 2018 - Octubre 2018",
    //   project: "Aplicación Web SIPAB 2.0 Actualizaciones.",
    //   activities: [
    //     {
    //       idt: 1,
    //       tasks:
    //         "Diseñar un diagrama para la creación de base de datos MySQL4.",
    //     },
    //     {
    //       idt: 2,
    //       tasks:
    //         "Diseñar un diagrama para la creación de base de datos MySQL5.",
    //     },
    //     {
    //       idt: 3,
    //       tasks:
    //         "Diseñar un diagrama para la creación de base de datos MySQL6.",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   position: "Programador Frontend",
    //   company: "IMOVES S.A. de C.V.",
    //   date: "Febrero 2018 - Abril 2018",
    //   project: "Revisión de aplicaciones existentes.",
    // },
    // {
    //   id: 4,
    //   position: "Pasante del Área de Innovación y Gestión del conocimiento",
    //   company: "Plan Internacional El Salvador",
    //   date: "Julio 2016 - Febrero 2017",
    //   project: "Aplicación Web para gestión de Consultorias.",
    // },
  ];

  // for(const item of expecienceData[1].activities){
  //   console.log(item.tasks)
  //   }
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
          {item.activities?.map((listI) => (
            <ul key={listI.idt} className="workscard__history--list">
              <li className="list__activities">{listI.tasks}</li>
            </ul>
          ))}
        </div>
      ))}
    </section>
  );
};
