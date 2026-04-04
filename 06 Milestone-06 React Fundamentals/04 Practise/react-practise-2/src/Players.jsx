import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Players = () => {
  const playersStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div style={playersStyle}>
      <h4>Players {players.length}</h4>
      <ol>
        {players.map((player) => (
          <li>{player.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Players;
