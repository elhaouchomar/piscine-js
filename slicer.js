function slice(str, start, end) {
    let result = ""
    if (start == null) {
        start = 0
    }
    if (end == null) {
        end = str.lenght -1
    }
    for (i = start; i <= end; i++) {
        result += str[i]
    }
    return result
}

// console.log(slice("omar", 0, 2))