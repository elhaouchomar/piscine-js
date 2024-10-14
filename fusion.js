function fusion(tar, src) {
    const newObj = { ...tar };

    for (let key in src) {
        if (key in tar) {
            if (Array.isArray(tar[key]) 
                && Array.isArray(src[key])) {
                newObj[key] = tar[key].concat(src[key]);
            } else if (typeof tar[key] === 'string' 
                && typeof src[key] === 'string') {
                newObj[key] = tar[key] + ' ' + src[key];
            } else if (typeof tar[key] === 'number' 
                && typeof src[key] === 'number') {
                newObj[key] = tar[key] + src[key];
            } else if (typeof tar[key] === 'object' 
                && typeof src[key] === 'object') {
                newObj[key] = fusion(tar[key], src[key]);
            } else {
                newObj[key] = src[key];
            }
        } else {
            newObj[key] = src[key];
        }
    }
    return newObj;
}
// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }));
// console.log(fusion({ str: "salem" }, { str: "alem" }));
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));
// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));
// console.log(fusion({ a: "hello", b: [] }, { a: 4 }));