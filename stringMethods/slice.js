/**
 * Returns a section of a string.
 * @param start The index to the beginning of the specified portion of stringObj.
 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
 * If this value is not specified, the substring continues to the end of stringObj.
 *
 * 1. indexStart >= str.length ---> an empty string is returned
 * 2. indexStart < 0 the index is counted from the end of the string. More formally, in this case, the substring starts at max(indexStart + str.length, 0).
 * 3. If indexStart is omitted, undefined, or cannot be converted to a number (using Number(indexStart)), it's treated as 0.
 * 4. If indexEnd is omitted, undefined, or cannot be converted to a number (using Number(indexEnd)), or if indexEnd >= str.length, slice() extracts to the end of the string.
 * 5. If indexEnd < 0, the index is counted from the end of the string. More formally, in this case, the substring ends at max(indexEnd + str.length, 0).
 * 6. If indexEnd <= indexStart after normalizing negative values (i.e. indexEnd represents a character that's before indexStart), an empty string is returned.
 */

let text = "Day la mot chuoi";

let part = text.slice();
console.log("original", text); // Day la mot chuoi
console.log("par", part); // Day la mot chuoi

let partOne = text.slice(0,3);
console.log("parOne", partOne);// Day

let partTwo = text.slice(3);
console.log("parTwo", partTwo); // la mot chuoi

let partThree = text.slice(-5);
console.log("partThree", partThree); // chuoi

let partFor = text.slice(-5, -3);
console.log("partFor", partFor); // ch



