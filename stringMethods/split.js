/**
 * Converting a String to an Array
 */

let text = "This is a text";

console.log(text.split(','));
console.log(text.split(""));
console.log(text.split(" "));
console.log(text.split("|"));

console.log("😄😄".split(/(?:)/));// [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
console.log("😄😄".split(/(?:)/u));// [ "😄", "😄" ]

console.log("".split());['']
console.log("".split(""));[]

function splitString(stringToSplit, separator){
    const arrayOfStrings = stringToSplit.split(separator);

    console.log("The original string is: ", stringToSplit);
    console.log("The separator is: ", separator);
    console.log("arrays string", arrayOfStrings);
    console.log("The array has ".concat( `${arrayOfStrings.length}`, " ", "elements: ", arrayOfStrings.join(" / ") ));
}
const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
const space = " ";
const comma = ",";
splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);

