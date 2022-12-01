import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import "../CSS/header.css";

export function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };
  return (
    <div>
      <nav className="navBar">
        <button onClick={toggleHamburger}>
          {hamburgerOpen ? (
            <MdClose
              style={{
                color: "goldenrod",
                width: "40px",
                height: "40px",
                backgroundColor: "inherit",
              }}
            />
          ) : (
            <FiMenu
              style={{
                color: "goldenrod",
                width: "40px",
                height: "40px",
                backgroundColor: "inherit",
              }}
            />
          )}
        </button>
        <ul
          onClick={closeMenu}
          className={`menuNav  ${hamburgerOpen ? "showMenu" : ""}`}
        >
          <li>
            <a href="#bio">Bio</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#stack">Stack Tecnológico</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="horizontal-bar">
          <li>
            <a href="#bio">Bio</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#stack">Stack Tecnológico</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
