

function makeTableRow(parentContainer, textContent){
const tr1 = document.createElement("tr")

}
function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root")
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1")
  heading.textContent = "Freelancer Forum"
  rootContainer.append(heading)
  /**
   * 👉 STEP 3:
   *    Create a table to hold our freelancers in
   */
  const table = document.createElement("table")
  const col1 = document.createElement("td")
  col1.textContent = "Name"
  table.append(col1)

  const tr1 = document.createElement("tr")
  tr1.textContent = "Bob"
  

  const tr2 = document.createElement("tr")
  tr2.textContent = "Emily"
  table.append(tr1, tr2)

  makeTableRow(table, "Bob")
  makeTableRow(table, "Emily")
  rootContainer.append(table)
  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
}

/**
 * 👉 STEP 4:
 *    Create a function to render the freelancer in our freelancer array
 */

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
