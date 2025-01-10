// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() {
      //return the count of numbers in data
      return this.data.length;
    }
    printNumbers() {
      //print the numbers in data
      this.data.map((num, idx) => console.log(`num: ${num}, idx: ${idx}`));

    }
    odds() {
      //return the odd numbers in data
      return this.data.filter((num) => num %2 ===1 );
    }
    evens() {
      //return the even numbers in data
      return this.data.filter((num) => num %2 ===0 );
    }
    sum() {
      //return the sum of the numbers -- 0 is the initial value
      return this.data.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

    }
    product() {
      //return the product of the numbers -- use 1 instead of 0 as initial value so product is not 0
      return this.data.reduce((accumulator, currentValue) => accumulator * currentValue, 1); 

    }
    greaterThan(target) {
      //return the numbers greater than the target
      return this.data.filter(number => number > target);
    }
    howMany(target) {
        
      //return the count of a given number
      return this.data.filter(number => number === target).length;
    }
  }

  
  
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number