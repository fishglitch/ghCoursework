const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

console.table(myInstruments);

myInstruments.unshift("saxophone");

console.table(myInstruments);

// this removed the extra "saxophone" from array 3.
myInstruments.splice(3, 1);
console.table(myInstruments);

myInstruments.push("tuba", "bassoon");
console.table(myInstruments);

// new lines to return specific objects in array
console.log(getFirstInstrument(myInstruments));
console.log(getLastInstrument(myInstruments));

console.table(getFirstAndLastInstruments(myInstruments));
console.table(getFirstThreeInstruments(myInstruments));

console.table(getTInstruments(myInstruments));

// instruments is a new variable to be passed into the function

function getFirstInstrument(instruments) {
  return instruments[0];
}
function getLastInstrument(instruments) {
  let index = instruments.length - 1;
  return instruments[index];
}

function getFirstAndLastInstruments(instruments) {
  let firstInstrument = getFirstInstrument(instruments);
  let lastInstrument = getLastInstrument(instruments);

  const newArray = [firstInstrument, lastInstrument];

  return newArray;
}

function getFirstThreeInstruments(instruments) {
  return instruments.slice(0, 3);
}

function getTInstruments(instruments) {
  // can use a for loop or while loop, in this case, for loop
  const tInstruments = [];
  for (let index = 0; index < instruments.length; index++) {
    let currentInstrument = instruments[index];

    if (currentInstrument.charAt(0) === "t") {
      tInstruments.push(instruments[index]);
    }
  }
  return tInstruments;
}

// wow I can learn to filter my data using a program i write!

// without the curly brackets, this becomes an infinite loop type CTRL+C to stop the process.

let n = 0;
while (n !== 10) {
  console.log(n);
  n++;
}


// condition, code, afterthought