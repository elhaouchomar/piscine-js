function reverse(input) {
    if (Array.isArray(input)) {
        const arr = [];
        for (let i = input.length - 1; i >= 0; i--) {
            arr.push(input[i]); 
        }
        return arr;
    } else if (typeof str === 'string') {
        let result = ""
        for (let i = str.length-1; i >= 0; i--) {
            result += str[i]
        }
        return result
    }
}

// console.log(reverse("omar"))
// console.log(reverse([1, 2, 3]))