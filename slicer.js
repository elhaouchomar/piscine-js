function slice(str, start = 0, end = str.length) {
    if (start < 0) {
        start += str.length
    }
    if (end < 0) {
        end += str.length
    }
    if (Array.isArray(str)) {
        let arr = []
        for (let i = start; i < end; i++) {
            arr[arr.length] = str[i];
        }
        return arr
    }
    let result = "";
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}

// console.log(slice([1, 2, 3, 4, 5, 6], 2))