const COHORT = "2019-CPU-RM-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

// === State ===

const state = {
  artists: [],
};

/** Updates state with artists from API */

// we need an unhappy path, when this fetch fails, or when json data is not present.
// try catch

async function getArtists() {
  try {
    const promise = await fetch(API_URL);
    const response = await promise.json();
    if (!response.success) {
      throw response.error;
    }
    console.log(response.data);
    state.artists = response.data;
  } catch (error) {
    alert("cannot load artist");
  }
}
// async function getArtists() {
//   try {
//     const response = await fetch(API_URL)
//     const promise = await promise.json()
//     if (!response.success){
//       throw response.error;
//     }
//     console.log(response.data)
//     state.artists = response.data
//   } catch (error) {
//   alert("Unable to load artists")
//   }

// }

/** Asks the API to create a new artist based on the given `artist` */

async function addArtist(artist) {
  // TODO
  const requestObject = {
    id: 1,
    name: "Artist Name",
    imageUrl: "https://www.example.com/image.jpg",
    description: "This is a description of the artist.",
  };

  const promise = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
  const response = await promise.json();
  console.log(response);
  render();
}
// async function addArtist(artist) {
//   const requestObject = {
//     id: 1,
//     name: "Artist Name",
//     imageUrl: "https://www.example.com/image.jpg",
//     description: "This is a description of the artist.",
//   };
//   const promise = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(requestObject),
//   });
//   const response = await promise.json();
//   console.log(response);
//   render();
// }
// === Render ===

/** Renders artists from state */

function renderArtists() {
  // TODO
  const ul = document.getElementById("artists");
  state.artists.forEach((artists) => {
    const li = document.createElement("li");
    li.textContent = artists.name;
    ul.appendChild(li);
  });
}
// function renderArtists() {
//   const ul = document.getElementById("artists")
//   state.artists.forEach((artist) =>{
//     const li = document.createElement("li");
//     li.textContent = artist.name
//     ul.appendChild(li)
//   })
// }

/** Syncs state with the API and rerender */

async function render() {
  await getArtists();
  renderArtists();
  const button = document.getElementById("add-artist");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    addArtist(event);
  });
}
// async function render() {
//   await getArtists();
//   renderArtists();
//   const button = document.getElementById("add-artist")
//   button.addEventListener("click", (event) =>{
//     event.preventDefault();
//     addArtist(event)
//   })
// }

// === Script ===

render();

// TODO: Add artist with form data when the form is submitted
