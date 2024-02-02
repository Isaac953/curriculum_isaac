import React from "react";
import "./Profile.scss";

export const Profile = () => {
  let profName = "Isaac Arias";
  let profTitle = "INGENIERO EN SISTEMAS Y COMPUTACIÓN";
  return (
    <section className="profile-card">
      <span className="name">{profName}</span>
      <span className="title">{profTitle}</span>
    </section>
  );
};
