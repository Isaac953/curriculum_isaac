"use client";

import React from "react";
import "./Layout.scss";

export const Header = () => {
  const headerT = "CURRICULUM PROFESIONAL";
  return (
    <header className="header">
      <h1 className="header__title">{headerT}</h1>
    </header>
  );
};
