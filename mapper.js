function map(arr, funcs) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(funcs(arr[i], i, arr))
    }
    return result
}

// const n = [1, 2, 3, 4, 5]
// const n2 = map(n, el => el)
// console.log(n2);

function flatMap(arr, funcs) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        let defu = funcs(arr[i], i, arr)
        if(Array.isArray(defu)) {
            result.push(...defu)
            continue
        }
        result.push(defu)
    }
    return result
}

// const arr1 = [1, 2, 3, 4];

// const add=(x) => [x * 2];
// // [[2], [4], [6], [8]]
// console.log(map(arr1, add));
// console.log(flatMap(arr1, add));
