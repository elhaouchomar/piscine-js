function slice(str, start = 0, end = str.length) {
    if (start < 0) {
        start += str.length
    }
    if (end < 0) {
        end += str.length
    }
    let result = "";
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}

console.log(slice('abcdef', 0, -2))