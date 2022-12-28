/**
 * Array.prototype.length
 * - là thuộc tính dự liệu độ dài của 1 array biểu thị số lượng elements trong array đó.
 * - Gets or sets độ dài trong 1 array.
 * - return 1 số nguyên không âm có giá trị nhỏ hơn 2^32 và cao hơn index cao nhất trong array.
 *
 * - Đối tượng Array quan sát thuộc tính length và tự động đồng bộ giá trị độ dài với nội dung của array.
 *  Điều này có nghĩa là:
 *   +> Đặt length thành 1 giá trị nhỏ hơn độ dài hiện tại của array sẽ cắt bớt mảng đó - các phần tử vượt quá độ dài mới sẽ bị xóa.
 *   +> Đặt bất kỳ index array nào (một số nguyên không âm nhỏ hơn 2^32) vượt quá độ dài hiện tại của array sẽ mở rộng array đó - thuộc tính length được tăng lên để phản ánh index cao nhất mới đó.
 *   +> Đặt độ dài length thành một giá trị không hợp lệ (1 giá trị âm hoặc một số lớn hơn 2^32) sẽ nén 1 ngoại lệ (throws a exception) RangeError.
 *
 * - Khi độ dài được set thành giá trị lớn hơn độ dài hiện tại, array được mở rộng bằng cách thêm "empty slots", không phải giá trị undefined.
 *   Empty slots có một số tương tác đặc biệt với các methods array.
 */

// ví dụ 1:
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length); // 4

// ví dụ 2:
const listA = [1, 2, 3];
const listB =  new Array(6);

console.log(listA.length); // 3
console.log(listB.length); // 6

listA.length = 5;
console.log(listA); // [1, 2, 3, empty x 2];

// listB.length = 2 ** 32; // RangeError: Invalid array length. return 1 số nguyên nhỏ hơn 2^32.

// const listC = new Array(-100); // Negative numbers are not allowed. RangeError: Invalid array length.

const listD = [1,2,3,4];
listD.length = 2;
console.log(listD); // [1,2]

const listE = [1,2];
listE[9] = '9';
console.log(listE);// [1, 2, empty x 7, 9];
console.log(listE.length); // 10

// Example

// e.1. lặp với forEach() array.
const arr = [1, 2];
console.log(arr); // [1,2]
arr.length = 5;
console.log(arr); // [1, 2, empty x 3];

arr.forEach((element) => console.log(element));
// 1
// 2

// e.2. lặp lại trên một array (Iterating over an array). Với mỗi element sẽ được gấp đôi.
const list = [1, 2, 3, 4, 5];
for (let i = 0; i < list.length; i++) {
    list[i] *= 2;
}
console.log(list);

// e.3: Create empty array of fixed length (tạo mảng trống có độ dài cố định).
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]