let userFlavors = prompt("Enter your order");

// enter  vanilla,vanilla,vanilla,strawberry,coffee,coffee
if (userFlavors) {
    // let flavorsArray = userFlavors.split(",")
} 
console.log(userFlavors)

 
console.table(userFlavors)

// The user's input string is split into an array of strings.

let flavorsArray = userFlavors.split(",")

console.table(flavorsArray)
// A loop is used to iterate through the array of flavors

flavorsArray.forEach(element => {
    
});

// An object is used to keep count of how many orders there are of each flavor.

// The program correctly counts the number of each flavor in the user's input.


// The logic for counting the frequencies of elements in an array is organized into a function that returns an object.

// Names are consistent and meaningful.