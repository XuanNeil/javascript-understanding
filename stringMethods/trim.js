/**
 * The trim() method removes whitespace from both ends of a string and return a new string,
 * without modifying the original string.
 * - Whitespace in this context is all the whitespace characters(space, tab, no-break space, etc.
 *
 * return:
 *  - A new string representing str stripped of whitespace from both its beginning and end.
 *  - If neither the beginning or end of str has any whitespace, a new string is still returned(essentially a copy of str),
 *  with no exception being thrown.
 *  - To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
 */

const greeting = '  Hello word   ';
const trimStr = greeting.trim();
console.log(trimStr);

