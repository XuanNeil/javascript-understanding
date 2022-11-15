/**
 * The trimStart() method removes whitespace from the beginning of a string. trimLeft is alias of this method.
 *
 * return value:
 *  - A new string representing str stripped of whitespace from its beginning (left side).
 *  - If the beginning of str has no whitespace, a new string is still returned (essentially a copy of str), with no exception being thrown.
 */

const greeting = " Hello world!   ";
const trimStartGreeting = greeting.trimStart();
console.log(trimStartGreeting);