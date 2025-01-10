// let inputYards = prompt("Enter amount of yards");

// function convertToMeters(yards) {
//     return yards * 0.9144;
// }

// let convertedMeters = convertedMeters(inputYards);

// function createMessage(yards,meters){
//     let message; 
//     let numYards = yards * 1;
// }
// if (numYards === 1760){
//     message = 'Thats as long as a mile!'
// console.log (message)
// }
// createMessage (inputYards, convertedMeters);

let inputYards = parseFloat(prompt("Enter amount of yards")); // Convert input to a float

function convertToMeters(yards) {
    return yards * 0.9144; // Convert yards to meters
}

let convertedMeters = convertToMeters(inputYards); // Call conversion function correctly

function createMessage(yards, meters) {
    let message;
    let numYards = yards; // Assign to numYards
    
    if (numYards === 1760) { // Check if numYards is equal to 1760
        message = "That's as long as a mile!";
    } else {
        message = `You entered ${yards} yards, which is ${meters.toFixed(2)} meters.`; // Create a default message
    }
    console.log(message); // Log the message within the function
}

createMessage(inputYards, convertedMeters); // Call the createMessage function