import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./vite.svg" alt="Vite logo" />
      </div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="https://github.com/aparkerh" target="_blank">
              <FaGithub fontSize="30px" color="white" cursor="pointer" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
