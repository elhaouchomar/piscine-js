// 1
function adder(arr, def) {
    return arr.reduce((sum, current) => sum + current, def)
}

// 2
function sumOrMul(arr, def) {
    return arr.reduce((res, cur) => {
        return cur % 2 === 0 ? res * cur : res + cur
    }, def)
}

console.log(sumOrMul([1, 2, 3, 5, 8], 5));

// 3
function funcExec(funcs, def) {
    return funcs.reduce((acc, curfnc) => {
        return curfnc(acc)
    }, def)
}