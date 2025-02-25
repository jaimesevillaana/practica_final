import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage"; // Importar HomePage
import CharactersPage from "./pages/CharactersPage";
import GamePage from "./pages/GamePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} /> {/* Ruta por defecto */}
          <Route path="characters" element={<CharactersPage />} />
          <Route path="game" element={<GamePage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);