
const fruits = ["Apple", "Banana"];

// The index of an array's first element is always 0.
const firstElementOfFruits = fruits[0];// Apple
console.log(firstElementOfFruits)

// The index of an array's second element is always 1.
const secondaryElementOfFruits = fruits[1]; // Banana
console.log(secondaryElementOfFruits);

// The index of an array's last element is always one less than the length of the array.
const finalElementOfFruits = fruits[fruits.length - 1]; // Banana
console.log(finalElementOfFruits);

// Using a index number larger than the array's length
// returns undefined
const data = fruits[99]; // undefined
console.log(data);