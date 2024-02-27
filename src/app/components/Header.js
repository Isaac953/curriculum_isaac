"use client";

import React from "react";
import "./Layout.scss";
import { Navbar } from "./navbar/Navbar";

export const Header = () => {

  const headerT = "CURRICULUM PROFESIONAL";
  
  //Print pdf dialog
  let printPDF = () => {
    console.log('Se abre opción para imprimir documento');
    window.print();
  }

  return (
    <header className="header">
      <h1 className="header__title">{headerT}</h1>
      <button onClick={printPDF} className="header__btn">Imprimir CV</button>
      {/* <Navbar /> */}
    </header>
  );
};
