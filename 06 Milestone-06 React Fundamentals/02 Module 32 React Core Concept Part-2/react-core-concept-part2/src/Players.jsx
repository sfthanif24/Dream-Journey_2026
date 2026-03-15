import { useState, useEffect } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="card">
      <h4>Players: {players.length}</h4>
      <ol>
        {players.map((player) => (
          <li>{player.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Players;
