// const fruitsRefrigerator = ["apple", "orange", "lime"];

// let fruitSaladFlavor = fruitsRefrigerator.pop();

// console.log(fruitSaladFlavor)

// console.log(fruitsRefrigerator)

console.log(20 === "20");
false;

console.log(20 == "20");
true;

let value = 20;

if (value < 0) {
  console.log("value is negative"); // does not apply
} else if (value > 0) {
  console.log("value is positive"); // applies
} else if (value === 20) {
  console.log("value is assigned the number 20"); // why is this the answer
  // The remaining conditions (else if (value === 20) and else) 
  // are not evaluated because a true condition has already been found ("value is positive"), 
  // and the corresponding block of code has executed.
} else {
  console.log("value is assigned the number 0"); // does not apply
}
