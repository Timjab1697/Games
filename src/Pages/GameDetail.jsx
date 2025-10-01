import { useParams, Link } from "react-router-dom";
import "../Style/GameDetail.css";
const games = [
  { id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Aventura",
    description: "Explora Hyrule en un mundo abierto.",
    bg: "/Images/Zelda.webp"},
  { id: "2",
    title: "Elden Ring",
    genre: "RPG",
    description: "Un mundo oscuro y desafiante creado por FromSoftware.",
    bg: "/Images/Elden.webp" },
  {  id: "3",
    title: "God of War Ragnarök",
    genre: "Acción",
    description: "Kratos y Atreus enfrentan el fin de los dioses nórdicos.",
    bg: "/Images/GOW.webp" },
];

export default function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  if (game) {
    document.body.style.backgroundImage = `url(${game.bg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed"; 
  }
  
  if (!game) {
    return (
      <div className="ContainerJuegoNoEncontrado">
        <p>Juego no encontrado.</p>
        <Link to="/games">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div className="JuegoEncontrado">
      <h3>{game.title}</h3>
      <p><b>Género:</b> {game.genre}</p>
      <p>{game.description}</p>

      <Link 
  to="/games" 
  onClick={() => {
    document.body.style.backgroundImage = "";
  }}
>
  Volver a la lista
</Link>

    </div>
  );
}
