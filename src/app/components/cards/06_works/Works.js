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
    {
      id: 2,
      position: "Programador PHP / Consultor Informático",
      company: "Plan Internacional El Salvador",
      date: "Mayo 2018 - Octubre 2018",
      project: "Aplicación Web SIPAB 2.0 Actualizaciones.",
      activities: [
        {
          idt: 1,
          tasks: "Hacer migración de datos con PHP de CSV a PostgreSQL.",
        },
        {
          idt: 2,
          tasks: "Capacitar al equipo encargado de utilizar el sistema.",
        },
        {
          idt: 3,
          tasks: "Integrar reportes gráficos realizados con FusionChartz.",
        },
        {
          idt: 4,
          tasks:
            "Actualizar desde el servidor para mostrar los últimos cambios.",
        },
        {
          idt: 5,
          tasks: "Integrar botones para exportar reportes a PDF y Excel.",
        },
        {
          idt: 6,
          tasks:
            "Hacer reuniones de seguimiento para validar productos entregados.",
        },
      ],
    },
    {
      id: 3,
      position: "Programador Frontend",
      company: "IMOVES S.A. de C.V.",
      date: "Febrero 2018 - Abril 2018",
      project: "Revisión de aplicaciones existentes.",
      activities: [
        {
          idt: 1,
          tasks: "Realizar tareas especificas en base a metodologia Scrum.",
        },
        {
          idt: 2,
          tasks: "Trabajar en equipo con el control de versiones GIT.",
        },
        {
          idt: 3,
          tasks: "Implementar un Dashboard con filtro de fechas.",
        },
        {
          idt: 4,
          tasks:
            "Programar en JavaScript gráficos de tipo lineal y dona con HighChartz.",
        },
        {
          idt: 5,
          tasks: "Diseñar con HTML, CSS y JavaScript una barra de navegación.",
        },
      ],
    },
    {
      id: 4,
      position: "Pasante del Área de Innovación y Gestión del conocimiento",
      company: "Plan Internacional El Salvador",
      date: "Julio 2016 - Febrero 2017",
      project: "Aplicación Web para gestión de Consultorias.",
      activities: [
        {
          idt: 1,
          tasks: "Diseñar diagramas de caso de uso para conocer los procesos.",
        },
        {
          idt: 2,
          tasks: "Crear diagramas de entidad-relación para la base de datos.",
        },
        {
          idt: 3,
          tasks:
            "Programar con HTML, CSS, PHP las vistas y funciones del sistema.",
        },
        {
          idt: 4,
          tasks:
            "Dividir por roles de usuario funciones especificas del sistema.",
        },
        {
          idt: 5,
          tasks: "Migrar datos con PHP de CSV a base de datos SQL Server.",
        },
        {
          idt: 6,
          tasks: "Exportar reportes con DomPDF.",
        },
        {
          idt: 7,
          tasks:
            "Hacer reuniones de seguimiento para validar productos entregados.",
        },
      ],
    },
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
