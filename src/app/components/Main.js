"use client";

import React, { useRef } from "react";
import "./Layout.scss";
import { Photo } from "./cards/01_photo/Photo";
import { Contact } from "./cards/02_contact/Contact";
import { Profile } from "./cards/03_Profile/Profile";
import { About } from "./cards/04_about/About";
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

import ReactPDF from '@react-pdf/renderer';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import { MyDocument } from "./cards/MyDocument";
import { createRoot } from 'react-dom/client';
import { ViewPDF } from "./cards/ViewPDF";



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

      {/* <ViewPDF /> */}

    </main>

  );

};

// const root = createRoot(document.getElementById('root'));
// root.render(<Main />);

// root.render();
