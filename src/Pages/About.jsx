import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../Style/About.css";

export default function About() {
  useEffect(() => {
    // Cambiar fondo al entrar
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    // Limpiar fondo al salir
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className="about-container">
      <h2>Sobre GameZone</h2>
      <p>
        GameZone es una aplicación demo hecha con React Router para navegar entre
        páginas dinámicas de videojuegos.
      </p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
