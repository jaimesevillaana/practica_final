import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Importamos los estilos

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="https://image.tmdb.org/t/p/original/vPfMwqMyfrflZopJCKI35xcvYMu.png" alt="Rick and Morty Logo" />
        </Link>
        <nav className="nav">
          <ul>
          <li>
              <Link to="/">Inicio</Link>
            </li>
        
            <li>
              <Link to="/characters">Personajes</Link>
            </li>
            <li>
              <Link to="/game">Juego</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}