/**
 * Lưu ý rằng điều này có thể dẫn đến một vòng lặp vô hạn nếu oldString là một chuỗi con của newString - ví dụ: nếu bạn đã cố gắng thay thế 'World' bằng 'OtherWorld'.
 * @param oldString
 * @param newString
 * @param fullString
 * @returns {*}
 */
function replaceString(oldString, newString, fullString) {
    for (let i = 0; i < fullString.length; i++) {
        if (fullString.substring(i, i + oldString.length) === oldString) {
            fullString = fullString.substring(0, i) + newString + fullString.substring(i + oldString.length, fullString.length)
        }
    }
    return fullString;
}

let newString = replaceString('World', 'Web', 'Brave New World');
console.log("newString", newString);
// bị vòng lặp vô hạn
// let newStringOne = replaceString('World', "WebWorld", 'Brave New World');

// best solution
function replaceStr(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS);
}

let newText = replaceStr('World', 'Web', 'Brave New World');
console.log(newText);