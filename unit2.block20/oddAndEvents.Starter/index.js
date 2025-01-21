/* === Criteria ===
* When the user clicks the "Add Number" button, the number they entered into 
    the input field should be added to the number bank.
* The number bank is not changed if the user enters a non-numeric value.
* The number bank should display all the numbers the user has entered.
*The numbers are placed into the correct bucket based on whether they 
    are odd or even.The number bank is not changed if the user enters a non-numeric value
* The number bank displays all the numbers the user has entered.
* When the "Sort 1" button is clicked, the first number in the number bank 
    is removed and placed into either the odd or even category.
* When the "Sort All" button is clicked, all the numbers in the number bank 
    are moved into either the odd or even category.
* The numbers are placed into the correct bucket based 
    on whether they are odd or even.
* References to selected DOM elements are stored in variables.
* The event listeners are listening for appropriate events, such as `submit` and `click`.
* The numbers in the bank, odd category, and even category are stored in state.
* The DOM is accurately rendered to reflect the state.
*/

/* Step 1: === Define the State ===
HTML line 19 <main> contains three id's for our state: numberBank, odds, evens.
* State refers to the data stored in the application at a given moment *
line 15 <form> input id="number" will render in numberBankArray[] through a function.
    then, eventHandler <buttons> will sort into oddsArray[], evensArray[] 
    create DOM elements & functions

*/

const state = {
  numberBankArray: [],
  oddsArray: [],
  evensArray: [],
};

// Step 2: === DOM elements ===

// line 15
const number = document.getElementById("number");
// line 22
const numberBankOutput = document.querySelector("#numberBank output");
// line 32
const oddsOutput = document.querySelector("#odds output");
// line 36
const evensOutput = document.querySelector("#evens output");
const form = document.querySelector("form");

/* Step 3: === Functionalities of the application === 

1. a) When user clicks "Add Number" <button>, line 15 input "number" is added to numberBankArray[].
* create addNumberToBank() to push "number" into numberBankArray[] state data
    console it so it shows up for review on console.
    render() it so it shows up on the web page 
*/
function addNumberToBank(numberToPush) {

  if (!isNaN(numberToPush)) {
    // only push number if valid
  } else {
    console.warn(
      `${numberToPush} is not a valid number, will not be added sry`
    );
  }
  state.numberBankArray.push(numberToPush);
  console.log("current state:", state);
  render();
}

/*
1. b) set an eventListener for <form> using DOM querySelector
when the event "submit" in <form> takes place, line 15 input "number" as a value is 
    pushed through  addNumberBank() (line 55 above).
    we use parseInt() method inside the invoked function so the value is a number, not a string.
*/

form.addEventListener("submit", function (event) {
  event.preventDefault(); // this is standard when clicking
  console.log(number.value);
  // "invoke the function" means, run the code inside the function (below)
  addNumberToBank(parseInt(number.value));
});

/*
sortOneNumberOnly() moves the first number from the numberBank 
    to either evensArray[] or oddsArray[]
*/

function sortfirstNumOnly() {
  const firstNumber = state.numberBankArray.shift();
  console.log("first num:", firstNumber);
  if (firstNumber % 2 === 0) {
    state.evensArray.push(firstNumber);
  } else {
    state.oddsArray.push(firstNumber);
  }
  render();
}

const sortOneButton = document.querySelector("#sortOne");
sortOneButton.addEventListener("click", function (event) {
  console.log(number.value);
  // don't forget to invoke function sortfirstNumOnly()!!!
  // so that the event handler triggers the function
  // because this button is not within a form, we don't need preventDefault.
  sortfirstNumOnly();
});

/*
sortOneNumberOnly() moves all number from the numberBank 
    to either evens[] or odds[]
*/

function sortAllNumbers() {
  // create a while loop

  while (state.numberBankArray.length > 0) {
    const firstNumber = state.numberBankArray.shift();
    console.log(firstNumber);
    // keep boolean login WITHIN the while loop so firstNumber is defined.
    if (firstNumber % 2 === 0) {
      state.evensArray.push(firstNumber);
    } else {
      state.oddsArray.push(firstNumber);
    }
  }

  render();
}

const sortAllButton = document.querySelector("#sortAll");
sortAllButton.addEventListener("click", function (event) {
  console.log(number.value);
  sortAllNumbers();
});

/*
for render(); to work inside function addToNumberBank, we need to make function render()
Use DOM property .textcontent so state.numberBank renders on page.
*/
function render() {
  numberBankOutput.textContent = state.numberBankArray;
  evensOutput.textContent = state.evensArray;
  oddsOutput.textContent = state.oddsArray;
}
