class Sneaker {
    constructor(price) {
      this.price = price;
    }
    isExpensive() {
      return this.price > 100;
    }
  }
  
  const mySneaker = new Sneaker(120);
  console.log(mySneaker.isExpensive());

  // how do I fix this code if I want to say "Sally"
  const person = {
    name: "Sally",
    sayHi: () => {
      console.log(this.name);
    },
  };
  
  person.sayHi();

    // how do I fix this code if I want to say "Sally"
    const person2 = {
        name: "Sally",
        sayHi() { // Change to a regular function
          console.log("hi " + this.name);
        },
      };
      
      person2.sayHi(); // This will correctly log "Sally"