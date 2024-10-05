function flat(arr, path = 1) {
    if (path < 1){
        return arr
    }

    const acc = []
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        if (Array.isArray(val)) {
            acc.push(...flat(val, path - 1));
        } else {
            acc.push(val)
        }
    }
    return acc
}

// const nestedArray = [1, 2, [3, 4, [5, 6]]];
// console.log(flat(nestedArray)); 
// console.log(flat(nestedArray, 2)); 
// console.log(flat(nestedArray, Infinity)); 