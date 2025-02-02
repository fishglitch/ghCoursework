
const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

// === State ===
// **added to App.js 
const state = {
  players: [], // fetchAllPlayers
  player: {}, // fetchSinglePlayer
  teams: [], //
};

// === REFERENCES ===
// need to convert to React
const playerList = document.getElementById("playerList"); // <main><article>
const form = document.getElementById("new-player-form");

// === FETCH ALL PLAYERS FROM API ===
// **added to App.js

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    // console.log("fetched result", result);

    if (!response.ok) {
      throw new Error(result.error || "Failed to fetch players");
    }

    state.players = result.data.players;
    // console.log("Players to render:", state.players);
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

// === FETCH SINGLE PLAYER FROM API ===
// **added to App.js

const fetchSinglePlayer = async (playerId) => {
  try {
    const promise = await fetch(API_URL + "/players/" + playerId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await promise.json();
    state.player = response.data.player;
    // console.log("single player fetched", response.data.player);
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

// == ADD NEW PLAYER TO ROSTER VIA API ===
// **added to App.js

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
      throw new Error("Cannot add new player", error);
    }
    // == add new player, fetch all players using await and render ==
    await fetchAllPlayers();

    renderAllPlayers(state.players);
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

// === REMOVE SINGLE PLAYER FROM ROSTER VIA API ===
// **added to App.js
const removePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `${API_URL}` + "/players/" + playerId, // is this correct?
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 204) {
      // console.log("Successfully deleted player:", playerId);
      await fetchAllPlayers();
      renderAllPlayers(state.players);
      return;
    }
    // console.log("remove player", response);
    render();
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

// FETCH TEAM IDs from API

// == RENDERS ===
/// === RENDER ALL PLAYERS <main> ===

function renderAllPlayers() {
  playerList.innerHTML = ""; // Clear previous content

  if (!state.players || state.players.length === 0) {
    playerList.innerHTML = "<p>No players found :(</p>";
    return;
  }

  // loop through each player to create puppy card
  const playersHTML = state.players.map((player) => {
    // console.log("map", player);
    const playerCard = document.createElement("div");

    playerCard.innerHTML = `
        <h1>${player.name}</h1>
        <p>Player ID: ${player.id}</p>
        <p>Player Status: ${player.status}<p>
        <p>Team ID: ${player.teamId}</p>
    `;
    // eventListener button click for PLAYER DETAILS
    const buttonDetails = document.createElement("button");
    buttonDetails.innerText = "Player Details";
    playerCard.appendChild(buttonDetails);
    buttonDetails.addEventListener("click", async () => {
      await fetchSinglePlayer(player.id);
      renderSinglePlayer(state.player);
    });
    // == create image element for player's image ==
    const image = document.createElement("img");

    image.src = player.imageUrl;
    image.alt = player.name;
    image.style.width = "100px";
    image.style.height = "auto";

    playerCard.appendChild(image);
    // console.log("show image:", player.name, image.src);

    // event Listener Delete Button for PLAYER DETAILS
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Player";
    playerCard.append(deleteButton);
    deleteButton.addEventListener("click", () => {
      const confirmDelete = confirm(`Are you sure you want to delete ${player.name}?`)
      if (confirmDelete) {
        removePlayer(player.id);
      }
    });
    // console.log("Deleted player:", player.name, player.id);

    // append playerCard to the playerList
    playerList.appendChild(playerCard);

    // console.log("Card to show:", playerCard.innerHTML);
    // return playerCard;

    // console.log("Players rendered:", playerCard);
  });

}

// === DISPLAY SINGLE PLAYER <main> ===

const renderSinglePlayer = (player) => {
  const details = document.createElement("section");
  details.innerHTML = `
    <h3>${player.name}</h3>
     <p>Player ID: ${player.id} </p>
      <p>Player Status: ${player.status}<p>
      <p>Team ID: ${player.teamId}</p>
  `;
  // Image for display single player
  const image = document.createElement("img");
  //set the img src to be the imageUrl from the player object
  image.src = player.imageUrl;
  image.style.width = "50%";
  image.style.height = "50%";
  details.append(image);
  const backButton = document.createElement("button");
  backButton.innerText = "Back to Puppies";
  details.append(backButton);
  backButton.addEventListener("click", () => render());
  playerList.replaceChildren(details);
  // console.log("single image", image);
};

// === RENDER NEW PLAYERS USING DOM from FORM ===


const renderNewPlayerForm = () => {
  // write a template literal use back ticks
  const newPlayerForm = `
    <style>
      input::placeholder {
        font-size: 0.8em;
        font-style: italic;
      } 
    </style>
    <label for="name">Name:</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      placeholder="Puppy Name"
      required
      />

    <label for="breed">Breed:</label>
    <input 
      type="text" 
      id="breed" 
      name="breed" 
      placeholder="Puppy Breed"
      required
      />
    <label for="url">Image URL:</label>
    <input 
      type="text"
      id="imageUrl"
      name="url"
      placeholder="Puppy URL Image"
      />
    <select name="status" id="status">
      <option value="field">Field</option>
      <option value="bench">Bench</option>
    </select>

    <select name="team" id="team">
      <option value="unassigned"></option>
      <option value="ruff">Ruff</option>
      <option value="fluff">Fluff</option>
    </select>

    <input type="submit" id="submit" />`;
  form.innerHTML = newPlayerForm;

};

// === EVENT LISTENER submit for New Player Form ===

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const playerData = {
    name: form.elements.name.value,
    breed: form.elements.breed.value,
    imageUrl: form.elements.imageUrl.value,
    status: form.elements.status.value,
    team: form.elements.team.value,
  };
  // console.log("New Player Data entered:", playerData);
  await addNewPlayer(playerData);
  form.reset();
});

// === INITIALIZE ===

const init = async () => {
  await fetchAllPlayers();
  renderNewPlayerForm();
};

async function render() {
  await fetchAllPlayers(); // you are invoking the function here
  renderAllPlayers(state.players);
}

render();

// === SCRIPT FOR NODE WHEN TESTING ===

if (typeof window === "undefined") {
  module.exports = {
    fetchAllPlayers,
    fetchSinglePlayer,
    addNewPlayer,
    removePlayer,
    renderAllPlayers,
    renderSinglePlayer,
    renderNewPlayerForm,
  };
} else {
  init();
}
