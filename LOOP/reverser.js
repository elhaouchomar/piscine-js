function reverse(str) {
    if (Array.isArray(str)) {
        const arr = []
        for (let i = str.length - 1; i >= 0; i--) {
            arr.push(str[i])
        }
        return arr
    } else if (typeof str === 'string') {
        let result = ""
        for (let i = str.length-1; i >= 0; i--) {
            result += str[i]
        }
        return result
    } else {
        return
 
    }
}

// console.log(reverse("omar"))
// console.log(reverse([1, 2, 3]))