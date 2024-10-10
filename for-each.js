function forEach(arr, funcs) {
    for (let i = 0; i < arr.length; i++) {
       funcs(arr[i], i, arr) 
    }
}

// const numbers = [1, 2, 3, 4, 5];
// forEach(numbers, element => {
//     console.log(element);
// });