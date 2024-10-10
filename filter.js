function filter(array, funcs) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (funcs(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}

function reject(array, funcs) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (!funcs(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}

function partition(array, functs) {
    const passed = []
    const failed = []
    for (let i = 0; i < array.length; i++) {
        if (functs(array[i], i, array)) {
            passed.push(array[i])
        } else {
            failed.push(array[i])
        }
    }
    return [passed, failed]
}

const nb = [1, 2, 3, 4, 5, 6]

const evennb = filter(nb, n => n % 2 === 0)
console.log(evennb);

const addnb = reject(nb, n => n % 2 === 0)
console.log(addnb);

const consnb = partition(nb, n => n %2 === 0)
console.log(consnb);