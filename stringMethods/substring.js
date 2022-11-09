/**
 * Returns the substring at the specified location within a String object.
 * @param start The zero-based index number indicating the beginning of the substring.
 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
 *
 * 1. If end is omitted, the characters from start through the end of the original string are returned.
 * 2. If startIndex or endIndex less than 0 --> startIndex or endIndex = 0
 * 3. If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped
 *
 * Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.
 * Any argument value that is NaN is treated as if it were 0.
 */

let string = "Day la mot chuoi";

let part = string.substring(3);
console.log("original: ",string); // Day la mot chuoi
console.log("part: ", part); // la mot chuoi

let partOne = string.substring(0,3); // Day
console.log("partOne: ", partOne);

let partTwo = string.substring(-1,3); // Day
console.log("partOne: ", partTwo);