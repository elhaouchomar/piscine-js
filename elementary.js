function multiply(a, b) {

    if (a == 0 || b == 0) {
        return 0
    }

    let result = 0
    isNeg = true


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
    if (a == 0 || b == 0) {
        return 0
    }

    let result = 0
    isNeg = true

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
    if ( a == 0 || b == 0) {
        return 0
    }

    let result = 0
    isNeg = true

    if (a < 0) {
        isNeg = !isNeg
        a = -a
    }

    if (b < 0) {
        isNeg = ! isNeg
        b = -b
    }

    for (let i = a; i >= b; i-=b) {
        result=i
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