function sign(nb) {
    if (nb < 0) {
        return -1
    } else if (nb > 0) {
        return 1
    }
    return 0
}

function sameSign(a, b) {
    if ((a <= 0 && b <= 0) || (a > 0 && b > 0)) {
        return true
    } 
    return false
}

// console.log(sign(-5))
// console.log(sign(5))
// console.log(sign(0))

// console.log(sameSign(-5, -5))
// console.log(sameSign(5, 5))
// console.log(sameSign(0, -1))