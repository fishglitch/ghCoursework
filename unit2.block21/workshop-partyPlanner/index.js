const COHORT = '2409-GHP-ET-WEB-PT';
const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/' + COHORT;

// === State ===

const state = {
    parties: [],
  };

/* === Updates state with parties from API === */
// TODO

async function getParties(){

    const response = await fetch(API_URL);

    // try{
    //     const promise = await fetch(API_URL);
    //     const response = await promise.json();
    //     if (!response.success){
    //         throw response.error;
    //     }
    //     console.log(response.data);
    //     state.parties = response.data;
    // } catch (error){
    //     alert("Cannot Load Party");
    // }
}
/* === Asks the API to create a new party based on the given `party` === */
// TODO
async function getParties(){
    
}

/* === Delete path ===
- ask the API to delete the given party
- calling API with delete method
*/
// TODO

/* === Renders parties from state === */
// TODO
function renderParties() {
    const ul = document.getElementById("parties");
    state.parties.forEach((party) => {

        
    });
}

/* === Syncs state with the API and rerender === */
// TODO: Add party with form data when the form is submitted

/* === Script === */
// render();