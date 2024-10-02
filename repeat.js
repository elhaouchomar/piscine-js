function repeat(str, nb) {
    let result = ""
    for (let i = 0; i < nb; i++) {
        result += str
    }
    return result
}

console.log(repeat("o", 3))