/**
 * the padStart() method pads the current string with another string (multiple times, if needed) until the resulting
 */

const str1 = '5';
console.log(str1.padStart(2, 0));

const fullNumber = '2034399002125581';
const lastForDigits = fullNumber.slice(-4);

const maskedNumber = lastForDigits.padStart(fullNumber.length, '*');
console.log(maskedNumber);