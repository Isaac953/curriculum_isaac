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
      <span className="profilecard__title">
      <Link
        href={{ pathname: url }}
        target="_blank"
        title={profTitle}
      >
        {profTitle}
      </Link></span>
    </section>
  );
};
