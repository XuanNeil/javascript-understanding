/**
 *
 * concat() method concatenates the string arguments to the calling string and return a new string.
 *
 */

const str1 = "Hello";
const str2 = "World";

const concatStr1 = str1.concat(" ", str2);
console.log(concatStr1);

const concatStr2 = str2.concat(", ", str1);
console.log(concatStr2);

const hello = "Hello, ";
console.log(hello.concat("Neil", " ", ".Have a nice day","!"));

const greetList = ["Neil", " ", "No Name", "!"];
console.log("".concat(...greetList));

console.log("".concat({})); // [object Object]
console.log("".concat([]));// ""
console.log("".concat(null)); // "null"
console.log("".concat(true)); // "true"
console.log("".concat(2,5)); // "25"
