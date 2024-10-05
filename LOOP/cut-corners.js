function floor(Nbr) {
    if (getNums(Nbr) == 0) {
        return Nbr
    }
    if (Nbr < 0) {
        return Nbr + getNums(Nbr) - 1
    }
    return Nbr - getNums(Nbr)
}

function round(Nbr) {
    if (Nbr < 0) {
        let a = getNums(Nbr)
        if (a * -1 >= -0.5) {
            return trunc(Nbr)
        }
        return trunc(Nbr) - 1
    }
    if (getNums(Nbr) >= 0.5) {
        return trunc(Nbr) + 1
    }
    return trunc(Nbr)
}

function ceil(Nbr) {
    if (getNums(Nbr) == 0) {
        return Nbr
    }
    if (Nbr < 0) {
        return Nbr + getNums(Nbr)
    }
    return Nbr - getNums(Nbr) + 1
}

function trunc(n) {
    if (n > -1 && n < 1) {
        return 0
    }
    if (n < 0) {
        return n + getNums(n)
    }
    return n - getNums(n)
}

function getNums(n) {
    if (n >= 68719476735) {
        n = n - 68719476735
    }
    if (n > -1 && n < 1) {
        return n
    }
    if (n < 0) {
        n = n * -1
    }
    while (n / 10 < 0) {
        n /= 10
    }
    while (n > 0) {
        if (n - 1 < 0) {
            break
        }
        n -= 1
    }
    return n
}


// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))