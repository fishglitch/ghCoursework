

const AllPlayers = ({ players, setSelectedPlayer, fetchSinglePlayer }) => {
  return (
    <div id="playerList">
      {players.length === 0 ? (
        <p>No players found :(</p>
      ) : (
        players.map(player => (
          <div key={player.id} className="playerCard">
            <h1>{player.name}</h1>
            <button onClick={() => fetchSinglePlayer(player.id)}>Player Details</button>
            <img src={player.imageUrl} alt={player.name} style={{ width: '100px', height: 'auto' }} />
            <button onClick={() => confirmDelete(player.id)}>Delete Player</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AllPlayers;