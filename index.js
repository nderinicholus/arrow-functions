// Arrow functions
const numbers = [10, 15, 20, 30, 35, 40, 50, 55, 60, 70, 80, 90, 95];

// Square
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(`Square: ${squares}`);

// Cubic
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(`Cubic: ${cubes}`);

// Even Numbers
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(`Even Numbers: ${evenNums}`);

// Odd Numbers
const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(`Odd Numbers: ${oddNums}`);

// Total
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(`Total: ${total}`);

// Average
const average = numbers.reduce(
  (accumulator, element) => (accumulator + element) / numbers.length
);
console.log(`Average: ${average.toFixed(2)}`);
