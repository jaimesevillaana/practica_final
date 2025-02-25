import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header /> {/* Incluimos la cabecera */}
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
    </div>
  );
}

export default App;