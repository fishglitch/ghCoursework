// Function to count the frequency of each flavor in the array
function countFlavors(flavorsArray) {
    // Create an object to store the count of each flavor
    const flavorCount = {};

    // Iterate through the array of flavors
    flavorsArray.forEach(flavor => {
        // Trim white space and convert to lowercase for consistency
        flavor = flavor.trim().toLowerCase(); 

        // If the flavor is already in the object, increment its count
        // Otherwise, set its count to 1
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    });

    // Return the object containing flavor counts
    return flavorCount;
}

// Prompt the user for froyo flavors
let userFlavors = prompt("Enter your order (comma-separated, e.g., vanilla, strawberry, coffee)");

// Check if there is input from the user
if (userFlavors) {
    // Split the user's input string into an array of strings
    let flavorsArray = userFlavors.split(",");

    // Log the user's input to the console
    console.log("User's Input:", userFlavors);
    console.table(flavorsArray);

    // Call the function to count flavors and store the result
    let flavorCounts = countFlavors(flavorsArray);

    // Log the counts of each flavor to the console
    console.log("Flavor Counts:", flavorCounts);
    console.table(flavorCounts);
} else {
    console.log("No flavors were entered.");
}