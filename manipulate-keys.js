function filterKeys(obj, func) {
    const result = {};
    for (const key in obj) {
        if (func(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapKeys(obj, trans) {
    const result = {};
    for (const key in obj) {
        result[trans(key)] = obj[key];
    }
    return result;
}

function reduceKeys(obj, reducer, initial) {
    const keys = Object.keys(obj);
    let result = initial !== null && initial !== undefined ? initial : '';
    let j = 0
    if (typeof result !== 'number') {
        j = 1
        result += keys[0] + result
    }

    for (let i = j; i < keys.length; i++) {
        result = reducer(result, keys[i]);
    }
    return result;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)))


// console.log(concatenatedNutrients);
console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
console.log(mapKeys(nutrients, (k) => `-${k}`));