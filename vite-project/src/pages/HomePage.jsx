import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; 

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Bienvenido al Universo de Rick y Morty</h1>
        <p>Explora los personajes, juega y diviértete.</p>
        <div className="cta-buttons">
          <Link to="/characters" className="cta-button">
            Ver Personajes
          </Link>
          <Link to="/game" className="cta-button">
            Jugar
          </Link>
        </div>
      </div>
    </div>
  );
}