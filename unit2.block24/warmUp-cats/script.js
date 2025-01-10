const API_URL = "https://catfact.ninja/";

const state = {
  fact: {},
  breeds: [],
};

const $catFactContainer = document.getElementById("cat-fact-container");
const $catBreedsContainer = document.getElementById("cat-breeds-container");

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getFact() {
  try {
    // console.log(cat-fact-container.id)
    const promise = await fetch(API_URL + "fact", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await promise.json();
    console.log(response);
    state.fact = response.fact;
    console.log(response.fact);
  } catch (err) {
    console.error(`Whoops, trouble getting data #${data}!`, err);
  }
}

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getBreeds() {
  try {
    const promise = await fetch(API_URL + "breeds");
    const response = await promise.json();

    // if (!response.success) {
    //   throw response.error;
    // }
    console.log(response);
    state.breeds = response.data;
    console.log(state.breeds);
  } catch (err) {
    console.error("Uh oh, trouble fetching breeds!", err);
  }
}

//Adds the HTML elements needed to the DOM
// with data from the javascript state
function render() {
  //TODO:  A button and a <p> element to the catFactContainer

  getFact();

  const factButton = document.createElement("button");
  factButton.innerText = "Fact";
  $catFactContainer.append(factButton);
  factButton.addEventListener("click", () => getFact());

  //TODO:  Divs for each cat breed type, display the Breed, country, coat and pattern
  getBreeds();
}
render();
