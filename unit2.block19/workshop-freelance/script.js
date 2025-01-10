// criteria
// The HTML does not contain any hard-coded data about freelancer names, occupations, or starting prices.

// The program initializes an array of possible names and an array of possible occupations
const names = ["Nardwuar", "Tzuyang", "Euclid", "Ashanti", "Sequoiah", "KRS-1"];
const occupations = [
  "Rapper",
  "Journalist",
  "Musician",
  "Designer",
  "Mukbang Broadcaster",
  "Mathematician",
];

// The program initializes an array of at least two freelancers with names, occupations, and starting prices.
const freelancers = [
  { name: "Calbee", price: 70, occupation: "Forager" },
  { name: "Dulce", price: 45, occupation: "Candy Maker" },
];

// The initial array of freelancers is rendered onto the page.

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");

  // title
  const title = document.createElement("h1");
  title.textContent = "Freelancer Forum";
  rootContainer.appendChild(title);

  //A function is written that correctly calculates the average starting price of the freelancers array.
  //DOM is updated to reflect the average starting price.
  const avgPriceText = document.createElement("p");
  avgPriceText.id = "avgPriceText"; // Give an ID to update later
  rootContainer.appendChild(avgPriceText);

  const availableFreelancers = document.createElement("h2");
  availableFreelancers.textContent = "Available Freelancers";
  rootContainer.appendChild(availableFreelancers);

  /**
   * 👉 STEP 3:
   *    Create a table to hold our Freelancers in
   */

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Table Headers
  const nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  headerRow.appendChild(nameHeader);

  const occupationHeader = document.createElement("th");
  occupationHeader.textContent = "Occupation";
  headerRow.appendChild(occupationHeader);

  const priceHeader = document.createElement("th");
  priceHeader.textContent = "Starting Price";
  headerRow.appendChild(priceHeader);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Table Body
  const tbody = document.createElement("tbody");
  freelancers.forEach((freelancer) => {
    makeTableRow(tbody, freelancer);
  });

  table.appendChild(tbody);
  rootContainer.appendChild(table);

  /**
   * 👉 STEP 4:
   *    Create a function to render the freelancers in our Freelance array
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */

  function makeTableRow(parentContainer, freelancer) {
    const tr = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = freelancer.name;
    tr.appendChild(nameCell);

    const occupationCell = document.createElement("td");
    occupationCell.textContent = freelancer.occupation;
    tr.appendChild(occupationCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = freelancer.price;
    tr.appendChild(priceCell);

    parentContainer.appendChild(tr);
  }

  /**
   * 👉 STEP 6:
   *    Create a function to add a new Freelancer to the Freelancers array
   *    A function is written that generates a freelancer with a random name, occupation, and starting price.
   *    This object is pushed into the freelancers array.
   */

  function addRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * (100 - 10 + 1) + 10); // Random price between $10 and $100

    const newFreelancer = {
      name: randomName,
      occupation: randomOccupation,
      price: randomPrice,
    };

    freelancers.push(newFreelancer);

    // `document.querySelector` is correctly used to select existing DOM elements
    // method that returns first matching element/null if no matches
    const tbody = document.querySelector("tbody");
    makeTableRow(tbody, newFreelancer);
    updateAveragePrice();
  }

  // Initial average price calculation and update
  function updateAveragePrice() {
    const total = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,
      0
    );
    const avgPrice = total / freelancers.length;
    const avgPriceText = document.getElementById("avgPriceText");
    avgPriceText.textContent = `The average starting price is $${avgPrice}.`;
  }

  // calling these functions should not be within functions
  updateAveragePrice();

  /* 👉 STEP 7:
   *    Add an interval to add a new freelancer every second
   */

  setInterval(addRandomFreelancer, 1000);
}

// Call init function
init();
