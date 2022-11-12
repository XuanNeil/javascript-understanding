/**
 * The ReplaceAl method returns a new string with all matches of a "pattern" replaced by a replacement.
 * The "pattern" can be a sting or RegExp, and the replacement can be string or a function to be called for each match
 * The original string is left unchanged.
 *
 * If the "patter" is an empty string, the replacement will be inserted in between every UTF-16 code unit, similar to "split" method.
 */

let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
let part = p.replaceAll('dog', "XXX");
console.log("part", part);

const regex = /Dog/ig;
let partOne = p.replaceAll(regex, "Neil");
console.log("partOne", partOne);

function unsafeRedactName(text, name) {
    return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
    return text.replaceAll(name, "[REDACTED]");
}

const report = "A hacker called ha.*er used special characters in their name to breach the system.";
console.log("unsafe", unsafeRedactName(report, "ha.*er")); // un safe

console.log("safe", safeRedactName(report, "ha.*er")); // safe

let replaceUnit = "XXX".replaceAll("", "_");
console.log("unit", replaceUnit);
