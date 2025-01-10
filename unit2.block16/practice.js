// array.map method

const array = [1, 2, 3, 4];
const mappedArray = array.map(x => x * 2);
console.log(mappedArray);

// array.filter

//filter out words whose length is less than 6 char.; keep words w char length over 6.

const words = ['dog', 'exuberant', 'present'];
const result = words.filter(word => word.length > 6);
const result2 = words.filter(word => word.startsWith('e'));
console.log(result);
console.log(result2);

// array.slice
const animals = ['ant', 'turtle', 'beaver'];
console.log(animals.slice(2));
