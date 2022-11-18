/**
 * the padEnd() method pads the current string with a given string (repeated, if needed) so that the
 * resulting string reaches a given length. The padding is applied from the end of the current string.
 *
 * Note:
 *  - the padEnd() method is a string method.
 *  - To pad a number, convert the number to a string first.
 *    Example:
 *     let number = 5;
 *     let padded = number.toString().padStart(4, "0");
 */

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// expected output: "200  "

"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"