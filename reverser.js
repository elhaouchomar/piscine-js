function reverse(str) {
    if (Array.isArray(str)) {
        arr = []
        for (i = str.length - 1; i >= 0; i--) {
            arr[arr.length] = arr[i]
        }
    }
    let result = ""
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

// console.log(reverse("omar"))
// console.log(reverse(['o', 'm', 'a', 'r']))