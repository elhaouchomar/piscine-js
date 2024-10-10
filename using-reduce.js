// 1
function adder(arr) {
    return arr.reduce((sum, current) => sum + current)
}

const n = [1, 2, 3, 4, 5]
console.log(adder(n));

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