function indexOf(arr, value, start) {
    if (start == null) {
        start = 0
    }

    for (let i = start; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, value, start) {
    if (start == null) {
        start = arr.length - 1
    }
    for (let i = start; i >= 0; i--) {
        if (value === arr[i]) {
            return i
        }
    }
    return -1
}

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true
        }
    }
    return false
}

// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
// console.log(lastIndexOf("omar", 'r', null))
// console.log(includes("omar", 'p'))