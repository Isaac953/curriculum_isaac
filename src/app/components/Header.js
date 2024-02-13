"use client";

import React from "react";
import "./Layout.scss";

export const Header = () => {
  const headerT = "CURRICULUM PROFESIONAL";
  return (
    <header className="header">
      <h1 className="header__title">
        <a>{headerT}</a>
      </h1>
    </header>
  );
};
