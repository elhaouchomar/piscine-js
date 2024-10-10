function fold(array, fn, accum) {
    for (let i = 0; i < array.length; i++) {
        accum = fn(accum, array[i])
    }
    return accum
}

const arr = [1, 2, 3, 4, 5]
const add = (acc, cur) => acc + cur
console.log(fold(arr, add, 0))


function foldRight(array, fn, accum) {
    for (let i = array.length - 1; i >= 0; i--) {
        accum = fn(accum, array[i])
    }
    return accum
}

console.log(foldRight(arr, add, 0))

function reduce(array, fn) {
    let initial = array[0]
    if (array.length < 1) {
        console.error('error');
    }
    for (let i = 1; i < array.length; i++) {
        initial = fn(initial, array[i])
    }
    return initial
}

console.log(reduce(arr, add));

function reduceRight(array, fn) {
    if (array.length < 1) {
        console.error('error')
    }
    let initial = array[array.length-1]
    for (let i = array.length -2; i >= 0; i--) {
        initial= fn(initial, array[i]);

    }
    return initial
}

console.log(reduceRight(arr, add));