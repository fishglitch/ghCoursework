// 5. Pass Props to Child Components
 
export default function AllPlayers({players, fetchSinglePlayer, removePlayer}) {
    return (
        <>
        <div>

        </div>
        </>
    );
}


// import React from "react";

// export default function AllPlayers({ players, fetchSinglePlayer, deletePlayer }) {
//   return (
//     <div id="playerList">
//       {players.length === 0 ? (
//         <p>No players found :(</p>
//       ) : (
//         players.map(player => (
//           <div key={player.id} className="playerCard">
//             <h1>{player.name}</h1>
//             <button onClick={() => fetchSinglePlayer(player.id)}>Player Details</button>
//             <button onClick={() => deletePlayer(player.id)}>Delete Player</button>
//             <img src={player.imageUrl} alt={player.name} style={{ width: '100px', height: 'auto' }} />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// {players.length === 0 ? (
//     <p>No players found, sowwie </p>
// ) : (
//     players.map(player => (
//         <div>
//             <h1>{player.name}</h1>
//             <button>Player Details</button>
//             <button>Delete Player</button>
//             <img/>
//         </div>

//     ))
// )}