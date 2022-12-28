/**
 *
 */

const fruits = [];
fruits.push("apple", "orange", "banana");
console.log(fruits.length); //3

fruits[5] = "mango";
console.log(Object.keys(fruits)); // ["0","1","2","5"];
console.log(fruits.length);//6

/**
 * Các method create new array
 * 1. concat()
 * 2. filter()
 * 3. flat()
 * 4, flatMap()
 * 5. map()
 * 6. slice()
 */

const arrayLike = {
    0: "a",
    1: "b",
    length: 2
}
console.log(Array.prototype.join.call(arrayLike, "+"));


// Append an item to an array
// using push method.
fruits.push("Cherry");


// remove the last item form an array.
// using pop method.
fruits.pop();

// Remove multiple items from the end of an array.
// ví dụ: remove the last 3 items from an array.

const listFruit = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const removeItems = listFruit.splice(-3);

//Truncate an array down to just its first N items
// ví dụ: This example uses the splice() method to truncate the fruits array down to just its first 2 items.
const list = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = 2;
const removedItems = list.splice(2);

// Remove the first item from an array

const items = fruits.shift();

// Remove multiple items from the beginning of an array
// vidu: remove the first 3 items from an array.

const listArray = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
listArray.splice(0,3);

// Add a new first item to an array
const fruit = ["Banana", "Mango"];
const newLength = fruit.unshift("Strawberry");

