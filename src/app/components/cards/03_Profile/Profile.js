import React from "react";
import "./Profile.scss";

export const Profile = () => {
  let profName = "Isaac Arias";
  let profTitle = "INGENIERO EN SISTEMAS Y COMPUTACIÓN";
  return (
    <section className="profilecard">
      <span className="profilecard__name">{profName}</span>
      <span className="profilecard__title">{profTitle}</span>
    </section>
  );
};
