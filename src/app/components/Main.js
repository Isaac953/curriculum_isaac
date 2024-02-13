"use client";

import React, { useRef } from "react";
import "./Layout.scss";
import { Photo } from "./cards/01_photo/Photo";
import { Contact } from "./cards/02_contact/Contact";
import { Profile } from "./cards/03_Profile/Profile";
import { About } from "./cards/04_about/About";
import { SoftSkills } from "./cards/05_softskils/SoftSkills";

export const Main = () => {
  return (
    <main className="main">
      <section className="main__contact">
        {/* <Photo />
        <hr className="hr-wh"></hr>
        <Contact />
        <hr className="hr-wh"></hr>
        <SoftSkills />
        <hr></hr> */}
      </section>
      <section className="main__experience">
        {/* <Profile />
        <hr className="hr-bg"></hr>
        <About />
        <hr className="hr-bg"></hr> */}
      </section>
    </main>
  );
};

// const root = createRoot(document.getElementById('root'));
// root.render(<Main />);

// root.render();
