import React from "react";
import "./Layout.scss";
import { Photo } from "./cards/01_photo/Photo";
import { Contact } from "./cards/02_contact/Contact";
import { Profile } from "./cards/03_Profile/Profile";
import { About } from "./cards/04_about/About";

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
        <About />
        <hr className="hr-bg"></hr>
      </section>
    </main>
  );
};
