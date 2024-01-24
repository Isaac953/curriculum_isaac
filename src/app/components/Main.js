import React from "react";
import "./Layout.scss";
import { Photo } from "./cards/Photo";
import { Contact } from "./cards/Contact";
import { Profile } from "./cards/Profile";

export const Main = () => {
  return (
    <main>
      <section className="main-contact">
        <Photo />
        <hr></hr>
        <Contact />
        <hr></hr>
      </section>
      <section className="main-experience">
      <Profile />
      <hr className="hr-bg"></hr>
      </section>
    </main>
  );
};
