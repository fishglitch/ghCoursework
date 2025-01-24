const fruit = {
    name: "banana",
    sayHiArrow: () => console.log (" Hi I am a " + this.name),
    sayHiFunction: function () {
        console.log(" Hi I am a " + this.name)
    }
}

console.log("Output of Say Hi Arrow");
fruit.sayHiArrow();
// this prints as below because there is no function keyword:
// Output of Say Hi Arrow
//  Hi I am a undefined

// fruit is an object, we gave a property name with functions 
// this is the properr way to print
console.log("Output of Say Hi Function");
fruit.sayHiFunction();


// a constructor has an optional input and does something to construct/create an optional properties and behaviors.


// const apple = {
//     name: "apple",
//     color: "red"
// }

// const banana = {
//     name: "banana",
//     color: "yellow",
// }

// what if i have 50 different kinds of fruits? This would be difficult to make because we will repeat the objects above. So we make a CLASS. Let's capture that into a blueprint for fruit.

class Fruit {
// property
    color;
    name;
    freshness = 5;

// ripen is a behavior, but is called a method. constructor is special.
    constructor(providedName, givenColor){
        this.name = providedName;
        this.color = givenColor;
    }   
    ripen(){
        this.freshness - 1
    }
}

class ExoticFruit extends Fruit {
// exotic fruit inherits all the properties of Fruit without needing to create a brand new blueprint. Fruit + more behavior! more properties!
// an extended family!
    country;
    constructor(providedName, givenColor, providedCountry){

// super lets us get properties of Fruit without needing to retype.
        super(Fruit(providedName, givenColor))
        // this.name = providedName;
        // this.color = givenColor;
        this.country = providedCountry;
}
}

const banana = new Fruit("banana", "yellow");
banana.ripen()
// now we created the same thing, but in one line.
// whenw emake these changes, it will apply to all the products.

const apple = new Fruit ("apple", "red");
apple.ripen()
// what if we want to add a new property? to track the freshness out of 5. See line 40

const durian = new ExoticFruit("Thailand")
duran.ripen()
