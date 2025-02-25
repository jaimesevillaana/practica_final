import React, { useState, useEffect } from "react";

export default function GamePage() {
  const [character, setCharacter] = useState(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const fetchRandomCharacter = async () => {
    try {
      const randomId = Math.floor(Math.random() * 671) + 1;
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );
      const data = await response.json();
      setCharacter(data);
      setMessage("");
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  const checkAnswer = (status) => {
    if (character.status.toLowerCase() === status) {
      setScore(score + 1);
      setMessage("¡Correcto!");
    } else {
      setMessage("¡Incorrecto!");
    }
    setTimeout(() => {
      fetchRandomCharacter();
    }, 1000);
  };

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  return (
    <div>
      <h1>Juego: ¿Vivo o Muerto?</h1>
      {character && (
        <div className="game-container">
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <div className="buttons">
            <button onClick={() => checkAnswer("alive")}>Vivo</button>
            <button onClick={() => checkAnswer("dead")}>Muerto</button>
          </div>
        </div>
      )}
      <h4>{message}</h4>
      <h4>Puntuación: {score}</h4>
      <button onClick={() => window.location.href = "/"}>Salir</button>
    </div>
  );
}