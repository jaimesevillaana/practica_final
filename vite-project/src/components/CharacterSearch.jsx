export default function CharacterSearch({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre...    "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="alive">Vivo</option>
          <option value="dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      
      </div>
    );
  }