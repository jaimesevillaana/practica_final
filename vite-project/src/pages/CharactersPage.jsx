import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import CharacterSearch from "../components/CharacterSearch";

export default function CharactersPage() {

  const [characters, setCharacters] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchCharacters();
  }, [searchTerm, statusFilter]);

  const fetchCharacters = async () => {
    let url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&status=${statusFilter}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results || []);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <CharacterSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <br />
      <CharacterList characters={characters} />
      <button onClick={() => window.location.href = "/"}>Salir

      </button>

    </div>
  );
}