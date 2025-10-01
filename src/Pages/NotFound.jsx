import { Link } from "react-router-dom";
import "../Style/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-hero">
      <div className="notfound-overlay"></div>
      <div className="notfound-content">
        {/* Muñequito triste */}
        <div className="sad-emoji">😢</div>

        <h1>404</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/Home" className="notfound-link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
