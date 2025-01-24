const items = [
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 4, name: "quq", price: 13 },
];

// put prompt and default value (as an empty string)
let requestedItem = prompt("Enter the item name.", "");

// define variable found
// see if the item is inside this list and see if it matches the requested item
// return the comparison
let found = items.find((item) => {
  return requestedItem === item;
});

if (found) {
  console.log("We found it! " + found);
} else {
  console.log("Nope");
}

const search = prompt(
  "enter a string, we will see the items which have that string in their name",
  "ba"
);
const filteredItems = items.filter(item => {return item.name.includes(search)});
console.table(filteredItems);