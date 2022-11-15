/**
 * The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
 *
 * return:
 *  - A new string representing str stripped of whitespace from its end (right side).
 *  - If the end of str has no whitespace, a new string is still returned (essentially a copy of str), with no exception being thrown.
 */

const greeting = " Hello world!  ";
const trimEndGreeting = greeting.trimEnd();
console.log(trimEndGreeting);
