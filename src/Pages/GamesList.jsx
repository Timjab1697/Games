import { Link } from "react-router-dom";

const games = [
  { id: "1", title: "The Legend of Zelda: Breath of the Wild", genre: "Aventura" },
  { id: "2", title: "Elden Ring", genre: "RPG" },
  { id: "3", title: "God of War Ragnarök", genre: "Acción" },
];

export default function GamesList() {
  return (
    <div>
      <h3>Lista de Juegos</h3>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>{game.title}</Link> - {game.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}
