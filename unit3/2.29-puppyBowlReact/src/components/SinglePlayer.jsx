// 5. Pass Props to Child Components

import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SinglePlayer() {
  let navigate = useNavigate();
  const cohortName = "2409-GHP-ET-WEB-PT";
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

  const { id } = useParams(); // get player id from url
  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      const response = await fetch(`${API_URL}/players/${id}`);
      if (!response.ok) {
        console.error(json.error || "cannot fetch player deets");
        return;
      }
      const json = await response.json();
      setPlayerDetails(json.data.player);
    };
    fetchPlayerDetails();
  }, []);

  return (
    <>
      {
        <section>
          <h3>{playerDetails?.name}</h3>
          <p>{playerDetails?.breed}</p>
          <p>Player ID: {playerDetails?.id}</p>
          <p>Team ID: {playerDetails?.teamId}</p>
          <img src={playerDetails?.imageUrl} alt={playerDetails?.name} />
          <button onClick={() => navigate("/")}>Back</button>
        </section>
      }
    </>
  );
}

/*
export default function PlayerCard({ player }) {
  const navigate = useNavigate();
  return (
    <div className={styles.puppy}>
      <h3>{player.name}</h3>
      <img src={player.imageUrl} />
      <button
        onClick={() => {
          navigate(`/${player.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}
*/
