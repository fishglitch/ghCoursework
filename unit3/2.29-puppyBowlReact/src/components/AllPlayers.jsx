// 5. Pass Props to Child Components

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({
  players,
  fetchSinglePlayer,
  removePlayer,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const navigate = useNavigate(); // double check if this should be here or in SinglePlayer.jsx

  // function to handle deletion of a player
  // removePlayer above actually performs the API call to delete the player
  // without any confirmation, so name this function below differently
  const handleDelete = (player) => {
    const confirmed = window.confirm(
      `
            Are you sure want to delete:\n
            ${player.name}\n
            ${player.breed}
            `
    );
    // if user confirms delete, call removePlayer()
    if (confirmed) {
      removePlayer(player.id); // this is the API call
    }
  };

  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="search name or breed"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        {filteredPlayers.length === 0 ? (
            <p>no players found</p>
        ) : (
            filteredPlayers.map((player) => (
                <div key={player.id}>
                <h1>{player.name}</h1>
                <p>
                  {player.breed}
                  {", "}
                  {"Status: " + player.status}
                </p>
                <button onClick={() => fetchSinglePlayer(player.id)}>
                  Player Details
                </button>
                <img src={player.imageUrl} alt={player.name} />
                <button onClick={() => handleDelete(player)}>
                  Delete Player
                </button>
              </div> 
            ))
        )}
      </div>

      {/* <div>
        {players.length === 0 ? (
          <p>no players found</p>
        ) : (
          players.map((player) => (
            // the singular "player" variable comes from map()
            // arrow function player => (...) is
            // a callback function that receives each
            // individual player object from the players array
            // as an argument (player).
            <div key={player.id}>
              <h1>{player.name}</h1>
              <p>
                {player.breed}
                {", "}
                {"Status: " + player.status}
              </p>
              <button onClick={() => fetchSinglePlayer(player.id)}>
                Player Details
              </button>
              <img src={player.imageUrl} alt={player.name} />
              <button onClick={() => handleDelete(player)}>
                Delete Player
              </button>
            </div>
          ))
        )}
      </div> */}
    </>
  );
}
