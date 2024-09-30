function isPositive(nb) {
    if (nb <= 0) {
        return false
    } else {
        return true
    }
}


function abs(nb) {
    if (nb < 0) {
        return -nb
    }
    return nb
}

console.log(isPositive(10))
console.log(isPositive(0))
console.log(isPositive(-54))
console.log(abs(-54))