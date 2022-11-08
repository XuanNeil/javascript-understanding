/**
 * - Data Type
 * 1. Primitive types (7 kiểu);
 *  - Number
 *  - String
 *  - Boolean
 *  - Symbol
 *  - Bigint
 *  - Null
 *  - Undefined
 *  2. Complex or reference (3 kiểu)
 *  - object
 *  - array
 *  - function
 */

const foo = 1;
let bar = foo;
console.log("bar", bar);
bar = 10;
console.log({foo,bar});

const numbers = [1,2];
const twoNumbers = numbers; // [1,2]
console.log({numbers, twoNumbers});// numbers: [1,2], twoNumbers: [1,2]
twoNumbers[0] = 10;
console.log({numbers, twoNumbers});// numbers: [10, 2], twoNumbers: [10,2] ?? Do vấn đề về tham chiếu (reference).