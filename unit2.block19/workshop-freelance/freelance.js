function makeTableRow(parentContainer, textContent) {
  const tr1 = document.createElement("tr");
  tr1.textContent = textContent;
  parentContainer.appendChild(tr1);
}
function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);

  const heading3 = document.createElement("h3");
  heading3.textContent = "The average starting price is $40.";
  rootContainer.appendChild(heading3);

  const heading2 = document.createElement("h2");
  heading2.textContent = "Available Freelancers";
  rootContainer.appendChild(heading2);
  /**
   * 👉 STEP 3:
   *    Create a table to hold our freelancers in
   */
  const table = document.createElement("table");
  const col1 = document.createElement("td");

  // create strong element
  const boldText = document.createElement("strong");
  boldText.textContent = "Name";

  col1.appendChild(boldText);
  table.appendChild(col1);

  makeTableRow(table, "Alice");
  makeTableRow(table, "Bob");
  makeTableRow(table, "Carol");

  rootContainer.appendChild(table);

  /**
 * 👉 STEP 4:
 *    Create a function to render the freelancer in our freelancer array
 */
// create an array holding freelancers
  const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
}



/**
 * 👉 STEP 6:
 *    Create a function to add a new freelancer to the freelancer array
 */

/**
 * 👉 STEP 7:
 *    Add an interval to add a new freelancer every second
 */

//call init function
init();
