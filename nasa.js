function nasa(n) {
    if (n%3 == 0 && n%5 == 0) {
        return 'NASA'
    } else if (n%3 == 0) {
        return 'NA'
    } else if (n%5 == 0) {
        return 'SA'
    } else {
        return n
    }
}

// console.log(nasa(8))