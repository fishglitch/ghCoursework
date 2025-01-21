const COHORT = "2409-GHP-ET-WEB-PT";
const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/" + COHORT;

// === State ===

const state = {
  parties: [],
};

/* === Updates state with parties from API === */

async function getParties() {
  try {
    const promise = await fetch(`${API_URL}/events`);
    const response = await promise.json();
    if (!response.success) {
      throw response.error;
    }
    console.log(response.data);
    state.parties = response.data;
  } catch (error) {
    alert("Cannot Load Party");
  }
}

/* === Add a New Party === 
Asks the API to create a new party based on the given `party` === 
*/

async function addParty(party) {
  try {
    const promise = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(party),
    });
    const response = await promise.json();
    console.log(response);
    render();
  } catch (error) {
    alert("cannot add event; http error");
  }
}

/* === Delete path ===
- ask the API to delete the given party
- calling API with delete method
*/
async function deleteParty(id) {
    try {
        const promise = await fetch(`${API_URL}/events/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
/* this portion helped fix the following bug:
Initially encountered catch error alert (line 79)~ due to json parsing error upon "click" of Delete button
Have had to refresh the page to see that the item was deleted, with no errors
*/
          if(promise.status === 204) {
            console.log("Successfully deleted party ID:", id);
            await getParties();
            renderParties();
            return;
          }
          
          const response = await promise.json();
          console.log("delete response:", response);

          if(!response.success){
            throw new Error("cannot delete error" + response.error)
          }
          console.log("successfully deleted, good job");
          await getParties();
          renderParties();
    } catch (error){
        alert ("cannot delete event; http error");
        console.error("error", error);
    }

}

// === Render ===

/*  == renderParties() written using TEMPLATE LITERALS == old code below:
old code:
// function renderParties() {
//   const ul = document.getElementById("parties");
//   ul.innerHTML = "";
//   state.parties.forEach((party) => {
//     const li = document.createElement("li");
//     const div = document.createElement("div");

//     // display party name
//     const h1 = document.createElement("h1");
//     h1.textContent = party.name;
//     div.appendChild(h1);

//     // display party date
//     const date = document.createElement("p");
//     date.textContent = `${new Date(party.date).toLocaleDateString()}`;
//     div.appendChild(date);

//     // display party location
//     const location = document.createElement("p");
//     location.textContent = `${party.location}`;
//     div.appendChild(location);

//     // display party description
//     const description = document.createElement("p");
//     description.textContent = `${party.description}`;
//     div.appendChild(description);

//     // create and append delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.id = party.id;
//     deleteButton.textContent = "Delete!";
//     deleteButton.addEventListener("click", () => {
//         console.log("deleting party with id:", party.id); // debug
//       deleteParty(party.id);
//     });
//     div.appendChild(deleteButton);
//     li.appendChild(div);
//     ul.appendChild(li);
//   });
// }
*/
function renderParties() {
  const ul = document.getElementById("parties");
  ul.innerHTML = ""; // Clear existing content

  const partiesHtml = state.parties.map(party => `
    <li>
      <div>
        <h1>${party.name}</h1>
        <p>${new Date(party.date).toLocaleDateString()}</p>
        <p>${party.location}</p>
        <p>${party.description}</p>
        <button id="${party.id}" onclick="deleteParty(${party.id})">Delete!</button>
      </div>
    </li>
  `).join(""); // Join the array into a string

  ul.innerHTML = partiesHtml; // Set the inner HTML of the UL

}
/** Syncs state with the API and rerender
 * Add party with form data when the form is submitted
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 */

// Convert to a Date object if needed

const form = document.getElementById("addParty");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  //   const name = formData.get("partyName");
  //   const eventDate = formData.get("partyEventDate");
  //   const location = formData.get("partyLocation");
  //   const description = formData.get("partyDescription");


  const eventDate = new Date(form.partyEventDate.value).toISOString();
  const party = {
    name: form.partyName.value,
    date: eventDate, //.toISOString()
    location: form.partyLocation.value,
    description: form.partyDescription.value,
  };
  console.log(party);
  await addParty(party);

  console.log("submitted a party, thank you");
});

async function render() {
  await getParties();
  renderParties();

  getParties(); // you are invoking the function here
}

/* === Script === */
render();
