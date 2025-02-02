import React, { useState, useEffect } from 'react';
import AllPlayers from './components/AllPlayers';
import PlayerForm from './components/PlayerForm';
import SinglePlayer from './components/SinglePlayer';
// Import CSS if necessary
import './App.css'; 

const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all players from API
  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${API_URL}/players`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to fetch players");
      
      setPlayers(result.data.players);
      setLoading(false);
    } catch (error) {
      console.error("Uh oh, trouble fetching players!", error);
      setLoading(false);
    }
  };
  const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${API_URL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerObj),
      });

      if (!response.ok) throw new Error("Cannot add new player");
      
      await fetchAllPlayers(); // Refresh the players list
    } catch (error) {
      console.error("Error adding player!", error);
    }
  };

  const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_URL}/players/${playerId}`);
      const result = await response.json();
      setSelectedPlayer(result.data.player);
    } catch (error) {
      console.error(`Failed to fetch player #${playerId}`, error);
    }
  };

  useEffect(() => {
    fetchAllPlayers(); // Fetch players when the component mounts
  }, []);
  return (
    <div>
      <h1>Puppy Bowl</h1>
      <PlayerForm addNewPlayer={addNewPlayer} />
      {loading ? (
        <p>Loading players...</p>
      ) : (
        <>
          <AllPlayers players={players} setSelectedPlayer={setSelectedPlayer} fetchSinglePlayer={fetchSinglePlayer} />
          {selectedPlayer && <SinglePlayer player={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />}
        </>
      )}
    </div>
  );
};

export default App;