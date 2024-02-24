import React from "react";
import "./Profile.scss";
import Link from "next/link";

export const Profile = () => {
  let profName = "Isaac Arias";
  let profTitle = "INGENIERO EN SISTEMAS Y COMPUTACIÓN";
  let url =
    "https://drive.google.com/file/d/1pbXnMSt9aoqnEcH2Vm8cc18O9qlfZGfC/view";
  return (
    <section className="profilecard">
      <span className="profilecard__name">{profName}</span>
      <Link
        href={{ pathname: url }}
        className="profilecard__title"
        target="_blank"
        title={profTitle}
      >
        {profTitle}
      </Link>
      {/* <span className="profilecard__title">{profTitle}</span> */}
    </section>
  );
};
