// Functionality for console using loops and object properties

// For loop demonstration
for (let i = 0; i < 3; i++) {
    if (i === 1) {
        break; // exits the loop when i is 1
    } else {
        continue; // skips the rest of the loop when i is 0
    }
    // This line will never run due to the continue statement, which skips to the next iteration
    console.log("Hello");
}

// Another loop demonstration
for (let i = 0; i < 3; i++) {
    if (i === 1) {
        return; // This will cause an error if used outside a function
    }
    console.log("Yo"); // This log appears when i is 0
}

// Shoe object definition
const shoe = {
    brandOptions: ["adidas", "nike", "sketchers"],
    brand: "",
    laces: true,
    velcro: false,
    color: "purple",
    activity: ["running", "fashion", "walking"],
    material: ["leather", "suede"],
    // wear: function(){console.log("Wear shoe")},
    // clean: function(){console.log("Clean shoe")}
    // wear(){console.log("Wear shoe")}

}   
// Displaying the brand options in a table format
console.table(shoe.brandOptions);

// Prompting the user to choose a brand
shoe.brand = prompt("Choose from: " + shoe.brandOptions[0] + " or " + shoe.brandOptions[1]);

// Console log to display the chosen brand
console.log(shoe.brand);

// You can uncomment below lines if you decide to use methods
// shoe.wear = function () { console.log("Wear shoe"); }
// shoe.clean = function () { console.log("Clean shoe"); }

// Display the whole shoe object
console.log(shoe);