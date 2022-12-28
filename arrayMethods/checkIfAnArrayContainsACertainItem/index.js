/**
 * Có 2 cách để kiểm tra 1 phần tử có tồn tại trong array không.
 * Two ways to check if an array contains a certain item
 * 1. with the includes() method.
 * 2. with the indexOf() method
 */

const fruits = ["Apple", "Banana"];

fruits.includes("Apple"); // true
fruits.includes("Cherry"); // false

fruits.indexOf("Apple") !== - 1; // true
fruits.indexOf("Cherry") !== -1 // false