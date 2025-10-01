import { Outlet, Link } from "react-router-dom";
import "../Style/GamesLayout.css";

export default function GamesLayout() {
  return (
    <div className="games-layout">
      <header className="games-header">
        <h2>Sección de Juegos</h2>
        <nav className="games-nav">
          <Link to="/games" onClick={() => {
    document.body.style.backgroundImage = "";
  }} className="games-link">Lista de juegos</Link>
          <Link to="/" onClick={() => {
    document.body.style.backgroundImage = "";
  }} className="games-link">Home</Link>
        </nav>
      </header>

      <main className="games-content">
        <Outlet />
      </main>
    </div>
  );
}