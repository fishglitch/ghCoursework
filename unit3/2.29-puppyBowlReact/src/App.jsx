//#region step by step
/**
 * 1. **Initialize State Variables**:
 *    Hooks
 *    - useState manages fetched data and local changes from component renders, and defines API URLs
 *    - State updates via `useState` trigger re-renders
 *    - useEffect manages async operations and other side effects
 *    - DOM updates in real time due to state updates by hooks
 *
 * 2. **Define Async Functions**:
 *    - Create functions for API calls with error handling using try-catch
 *
 * 3. **Call Async Functions**:
 *    - useEffect invokes fetch fcns when component mounts
 *    - this is where data fetching initiates!
 *
 * 4. **Render Content in Return Statement**:
 *    - Condition rendering based on component states (loading, players list).
 *
 * 5. **Pass Props to Child Components**:
 *    - Update child components (.jsx files) to accept props for data and functionality.
 *
 * 6. **Styling and Testing**:
 *    - Apply CSS styles and test the app with `npm start`.
 */
//#endregion

// 1. **Initialize State Variables**

// imports
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";

const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

// 2. **Define Async Functions**
export default function App() {
  const [players, setPlayers] = useState([]); // fetchAllPlayers orig was: players: [] why useState([])?
  const [selectedPlayer, setSelectedPlayer] = useState(null); //fetchSinglePlayer
  const navigate = useNavigate();
  // do I need a teams[]?
  // const [loading, setLoading] = useState(true); need to understand where this is from

  // 2a. **async: FETCH ALL PLAYERS FROM API**
  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${API_URL}/players`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to fetch players");
      }

      setPlayers(result.data.players);
    } catch (error) {
      console.error("Cannot fetch players!", error);
    }
  };

  // 2b. **async: ADD NEW PLAYER TO ROSTER VIA API**
  const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${API_URL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerObj),
      });
      if (!response.ok) {
        const result = await response.json();
        console.error("Error details:", JSON.stringify(error));
        throw new Error(`Can't add player: ${result.error || "Unknown error"}`);
      }

      await fetchAllPlayers();
    } catch (error) {
      console.error("Oops, can't add player", error);
    }
  };

  // 2c. **async: FETCH SINGLE PLAYER FROM API**
  const fetchSinglePlayer = async (playerId) => {
    try {
      // should i use const result instead of const promise? Yes.
      // this was creating console.error(can't fetch) when clicking Player Details btn
      // no need for const promise
      // bc fetch itself returns a Promise that you are awaiting.
      // The value returned by await fetch() is directly stored in response.
      const response = await fetch(`${API_URL}/players/${playerId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json(); // should i use await result instead?
      
      if (!response.ok) {
        throw new Error("can't fetch player!!");
      }
      // due to changes above,
      // change promise.json to response.json
      // instead of const response, use const result here
      
      setSelectedPlayer(result.data.selectedPlayer);
      navigate(`/${playerId}`); 
      // this navigates to individual player page http://localhost:5173/22213
      // but it is currently blank!
    } catch (error) {
      console.error(`oops, can't fetch player #${playerId}`, error);
    }
  };

  // 2d. **async REMOVE SINGLE PLAYER FROM ROSTER VIA API**
  const removePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_URL}` + "/players/" + playerId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("something happened can't delete player!");
      }
      await fetchAllPlayers(); //refresh players after deletion
    } catch (error) {
      console.error(`can't remove player #${playerId}`, error);
    }
  };

  // 3. **Call the defined Async Functions**
  useEffect(() => {
    fetchAllPlayers();
  }, []);

  // 4. **Render Content in Return Statement**
  // 5. ** remember to Pass Props to Child Components**

  return (
    <>
      <div>
        <h1>Puppy Bowl</h1>
        {/* This is redundant here, 
        since we have this listed in Route Link 
        <AllPlayers
          players={players}
          selectedPlayer={setSelectedPlayer}
          fetchSinglePlayer={fetchSinglePlayer}
          removePlayer={removePlayer}
        /> */}
      </div>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <AllPlayers
                players={players}
                selectedPlayer={setSelectedPlayer}
                fetchSinglePlayer={fetchSinglePlayer}
                removePlayer={removePlayer}
              />
            }
          />
          <Route path="/:id" element={
            <SinglePlayer 
            setSelectedPlayer={setSelectedPlayer}
            />} />
          <Route
            path="/add-player"
            element={<NewPlayerForm addNewPlayer={addNewPlayer} />}
          />
        </Routes>
      </div>
    </>
  );
}

/** <AllPlayers fetchAllPlayers={fetchAllPlayers}/>
 * while meant to pass fetchAllPlayers() as a prop to AllPlayers.jsx,
 * we won't pass this since it is a component used to display player list
 * rather than fetch it
 * Instead, AllPlayers should pass the const [] arrays we had defined in useState hook
 */

// It seems you are trying to pass the fetchAllPlayers function
// as a prop to the AllPlayers component.
// Ensure that the AllPlayers component is set up to accept and
// use this prop if needed.
// However, typically, you wouldn't pass fetchAllPlayers to AllPlayers
// since this component is used primarily for displaying the player list,
// rather than fetching it.

/** arrow function version, which is modern and more concise:
 * const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
        <Route path="/" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
};
export default App;
 */
