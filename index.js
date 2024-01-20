// Arrow functions
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Total
const total = numbers.reduce((accumulator, element) => {
  return accumulator + element;
});
console.log(`Total: ${total}`);

// Average
const average = numbers.reduce((accumulator, element) => {
  return (accumulator + element) / numbers.length;
})
console.log(`Average: ${average.toFixed(2)}`)

// Square
const squares = numbers.map((element) => {
  return Math.pow(element, 2);
});

console.log(`Square: ${squares}`);

// Cubic
const cubes = numbers.map((element) => {
  return Math.pow(element, 3);
});
console.log(`Cubic: ${cubes}`);


