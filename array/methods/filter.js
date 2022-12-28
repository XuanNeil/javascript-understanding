/**
 *
 * filter method tạo 1 shallow copy của 1 phần của 1 array nhất định, được lọc xuống chỉ các phần tử từ array đã cho vượt qua
 * bài kiểm tra được thực hiện bởi hàm được cung cấp
 *
 * - return value:
 *  +> 1 shallow copy của 1 element của array đã cho, được filter xuống chỉ các phần tử từ mảng đã cho vượt qua bài kiểm tra do hàm
 *  cung cấp thực hiện.
 *  +> Nếu không có phần tử nào vượt qua bài kiểm tra , 1 array empty được trả về.
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log("result", result);

// Example:
// ex.1: Filter tất cả các phần từ có value nhỏ hơn 10 trong array.

const numbers = [1, 5, 10, 12, 14, 20];
const filtered = numbers.filter((number) => number > 10);
console.log("filter number less than 10", filtered);

// ex.2: Tìm tất cả các số nguyên tố trong 1 array.
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/**
 * Số nguyên tố là số tự nhiên chia hết cho 1 và chính nó.
 * 1 cách đơn giản để hiểu: Số nguyên tố là số lớn hơn 1, nếu ngoài chữ số 1 và bản thân số đó thì nó không chia hết
 * cho bất kỳ số nào khác nữa.
 *
 * 1. solution
 *  - 1 vòng lặp với điều kiện i phải lớn hơn 1, kết thúc vòng lặp số đó phải lớn hơn i, i tăng lên 1 đơn vị
 *  - nếu số đó mà chia hết cho i thì không phải số nguyên tố và ngược lại
 */

const isPrime = (num) => {
  for (let i = 2; num > i; i++){
      console.log({num, i});
      if (num % i === 0){
          return false;
      }
  }
    return num > 1;
}
const arrayOfPrime = array.filter(isPrime);
console.log("prime", arrayOfPrime);

//ex 3: filter tất cả các số nguyên âm và falsy và "undefined";
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];

// C1
const arrById = arr.filter((item) => item.id && item.id !== "undefined");
console.log(arrById);

// C2
const filterById = (item)=> {
    /**
     * C1: return Number.isFinite(item.id) && item.id (khuyen khich)
     * C2:
     *  if (Number.isFinite(item.id) && item.id){
     *         return true;
     *     }
     *     return false
     *  C3:
     *  if(Number.isFinite(item.id){
     *      if (item.id){
     *          return true;
     *      }
     *  }
     *  return false;
     *  C4: Number.isFinite(item.id) && item.id ? true : false
     */

    return Number.isFinite(item.id) && item.id;
}
const arrById2 = arr.filter(filterById);
console.log(arrById2);

// ex.4: Searching in array. Lọc nội dung array dựa vào tiêu chí tìm kiếm
const fruits = ["Apple", "banana", "grapes", "mango", "orange"];

const filterItems = (listFruit, query) => {
   return listFruit.filter((fruit) => fruit.toLowerCase().includes(query.toLowerCase()));
}

const queryItems = filterItems(fruits, 'o');
console.log("queryItems", queryItems);

// ex4. Gọi method filter trên các đối tượng không phải là array.
const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
const convertArray = Array.prototype.filter.call(arrayLike, x => x);
console.log(convertArray);