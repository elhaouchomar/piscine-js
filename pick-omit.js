function helpper(str) {
    return Array.isArray(str) ? str : [str]
}

function pick(obj, str) {
    const newobj = {};
    const keyArray = helpper(str);
    
    for (let key in obj) {
        if (keyArray.includes(key)) {
            newobj[key] = obj[key];
        }
    }
    return newobj;
}

function omit(obj, str) {
    const newobj = {};
    const keyArray = helpper(str);
    
    for (let key in obj) {
        if (!keyArray.includes(key) && obj.hasOwnProperty(key)) {
            newobj[key] = obj[key];
        }
    }
    return newobj;
}

const obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(pick(obj, ['b', 'd'])); 
console.log(omit(obj, ['b', 'd'])); 
