/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  // TODO: use `forEach`
  items.forEach((item) => {
    console.log(item.name);
  });
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // TODO: use `map` which is a new array!
  // console.log(items);
  // with .map(), the arrow function has a block body due to curly braces {}..
  // When you provide a block body, you must explicitly use a return statement to return a value.
  // use block bodies to perform multiple statements inside the function (.map and .toUpperCase)
  // use curly braces {} to define the body of the function, then explicitly use return keyword to return a value.
  const mappedArray = items.map((item) => {
    return item.name.toUpperCase();
  });
  console.log(mappedArray);
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // TODO: use `find`
  // we have to check that the id matches, use strict equality operator to return boolean BUT WHY??
  // retain return keyword here, it returns the id value.
  const foundItem = items.find((item) => {
    return item.id === id;
  });
  return foundItem;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
function getItemPriceByName(items, name) {
  // TODO: use a loop!
  // there is no rturn
  const filteredArray = items.filter((item) => item.name === name);
  return filteredArray[0].price;
}

// for (let i = 0; i < items.length; i++) {
//   // defined const inside for loop to retrieve a food item in the array
//   // const was defined to retrieve food item values using keys .name, .price
//   // if statement
//   const foodItem = items[i];
//   if (foodItem.name === name) {
//     return foodItem.price;
//   }
// }

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  // TODO: use `filter`
  // we defined a variable filterCategory to equal the list of items in the Inventory to be filtered
  // inside .filter method is the function to see if the item category is of the same type
  const filterCategory = items.filter((item) => item.category === category);
  filterCategory.forEach((item) => console.log(item.name));
}
/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  // TODO: use `reduce`
  const initialValue = 0
  const reducedArray = items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, initialValue);
  console.log(reducedArray);
  // accumulator and currentValue are general reference point 
  // return items.reduce ((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  // TODO: use `reduce`
  // based on the qty multiplied by the total price
  // is this good syntax or do we need to define const for clear explanation
  // if you learn how to use return, you will see that other array methods don't do return (like .map).
  // it is good practice to define const
  return items.reduce ((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0);
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

console.log("Welcome! We carry the following items:");
logNames(INVENTORY);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));