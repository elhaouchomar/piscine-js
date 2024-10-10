// 1
function adder(arr) {
    return arr.reduce((sum, current) => sum + current, 0)
}

// 2
function sumOrMul(arr, def) {
    return arr.reduce((res, cur) => {
        return cur % 2 === 0 ? res * cur : res + cur
    }, def)
}

// 3
function funcExec(funcs, def) {
    return funcs.reduce((acc, curfnc) => {
        return curfnc(acc)
    }, def)
}