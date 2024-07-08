import React from "react";
import Logo from "./header/logo";
import Navbar from "./header/navbar";
import HeaderActions from "./header/headerActions";

const HeaderComponent = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <HeaderActions />
    </header>
  );
};

export default HeaderComponent;
