/**
 *  Array.prototype.concat()
 *  concat() method được sử dụng để merge 2 or nhiều arrays.
 *  - Phương thức này không làm thay đổi array hiện tại mà thay vào đó trả về 1 array mới.
 *
 *  - Parameters:
 *    valueN (optional): Array hoặc giá trị để nối thành 1 array mới. Nếu tất cả các tham số valueN bị bỏ qua,
 *    concat return 1 bản shallow copy của mảng hiện có mà nó được gọi.
 *
 *  - Return value:
 *     1 array mới thay thế.
 *
 */

// ví dụ 1:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const mergeArray = array1.concat(array2);
console.log("original array1", array1);
console.log("original array2", array2);
console.log("merge array",mergeArray);

// ví dụ 2: Nối 3 array.
const num1 = [1, 2, 3];
const num2 = [2, 3, 4];
const num3 = [3, 4, 5];

const numbers = num1.concat(num2, num3);
console.log("result", numbers);

// ví dụ 3: Nối các giá trị vào một array.
const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);