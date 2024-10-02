function multiply(a, b) {
    let result = 0
    let isNeg = true

    if (a == 0 || b == 0) {
        return 0
    }

    if (a < 0) {
        isNeg = !isNeg
        a = -a
    }

    if (b < 0) {
        isNeg = !isNeg
        b = -b
    }

    for (let i = 0; i < b; i++) {
        result += a
    }

    if (!isNeg) {
        result = -result
    }
    return result
}

function divide(a, b) {
    let result = 0
    let isNeg = true

    if (a == 0 || b == 0) {
        return 0
    }

    if (a < 0) {
        isNeg = !isNeg
        a = -a
    }

    if (b < 0) {
        isNeg = !isNeg
        b = -b
    }

    for (let i = 0; i < b; i++) {
        a -= b
        result++
    }
    if (!isNeg) {
        result = -result
    }
    return result

}

function modulo(a, b) {
    let result = 0
    let isNeg = true

    if (a == 0 || b == 0) {
        return 0
    }


    if (a < 0) {
        isNeg = !isNeg
        a = -a
    }

    if (b < 0) {
        isNeg = !isNeg
        b = -b
    }

    for (let i = a; i >= b; i -= b) {
        result = i
    }
    result -= b

    if (!isNeg) {
        result = -result
    }
    return result
}


// console.log(multiply(3, 15))
// console.log(divide(-15, -3))
// console.log(modulo(13, -2))