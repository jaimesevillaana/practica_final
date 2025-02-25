export default function CharacterList({ characters }) {
    return (
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Estado: {character.status}</p>
          </div>
        ))}
      </div>
    );
  }