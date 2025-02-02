import React from 'react';

const SinglePlayer = ({ player, setSelectedPlayer }) => {
  return (
    <section>
      <h3>{player.name}</h3>
      <p>Player ID: {player.id}</p>
      <p>Player Status: {player.status}</p>
      <p>Team ID: {player.teamId}</p>
      <img src={player.imageUrl} alt={player.name} style={{ width: '50%', height: 'auto' }} />
      <button onClick={() => setSelectedPlayer(null)}>Back to Players</button>
    </section>
  );
};

export default SinglePlayer;