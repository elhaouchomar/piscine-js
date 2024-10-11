// 1
function adder(arr, def = 0) {
    return arr.reduce((sum, current,) => sum + current, def)
}

// 2
function sumOrMul(arr, def = 0) {
    return arr.reduce((res, cur) => {
        if (cur % 2 === 0) {
            return res * cur
        } else {
            return res + cur
        }
    }, def)
}

// 3
function funcExec(funcs, def) {
    return funcs.reduce((acc, curfnc) => {
        return curfnc(acc)
    }, def)
}