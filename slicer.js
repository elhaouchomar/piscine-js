function slice(str, start, end) {
    let result = "";
    if (start == null) {
        start = 0;
    }
    if (end == null) {
        end = str.length;
    }
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}