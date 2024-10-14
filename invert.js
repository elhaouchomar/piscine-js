function invert(obj) {
    const newObj = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[obj[key]] = key
        }
    }
    return newObj
}

// ob = { a: 1, b: 2, c: 3 }

// console.log(ob);

// console.log(invert(ob))