import React from "react";
import "./Photo.scss";

export const Photo = () => {
  let logo = "./img/photo_cv.jpg";
  return (
    <figure className="photocard">
      <img className="photocard__profile" src={logo} alt="Logo" />
    </figure>
  );
};
