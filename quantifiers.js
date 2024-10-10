function every(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            return false
        }
    }
    return true
}

const arr = [1, 2, 3, 4, 5, 6]

const add = nb => nb > 3

console.log(every(arr, add));

function some(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return true
        }
    }
    return false
}
console.log(some(arr, add));

function none(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return false
        }
    }
    return true
}

console.log(none(arr, add));
