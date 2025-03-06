import React, { useState, useEffect } from "react";
import { getCharacters } from "../apiService";
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
    try {
      const data = await getCharacters(searchTerm, statusFilter); // Usa la función GET
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