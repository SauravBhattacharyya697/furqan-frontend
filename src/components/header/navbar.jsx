import React from "react";
import { NAVBAR_MENU } from "../../utils/navbarContent";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        {NAVBAR_MENU.map((menu) => (
          <li key={menu.id}>
            <a href={menu.redirectsTo}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
