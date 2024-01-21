import React from "react";
import "./Layout.scss";
import { Photo } from "./cards/Photo";

export const Main = () => {
  return (
    <main>
      <section className="main-contact"><Photo/></section>
      <section className="main-experience">datos cv</section>
    </main>
  );
};
