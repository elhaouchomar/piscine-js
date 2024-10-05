// function repeat(str, nb) {
//     let result = ""
//     for (let i = 0; i < nb; i++) {
//         result += str
//     }
//     return result
// }

function repeat(str, nb) {
    let result = ""
    let i = 0
    while (i < nb) {
        result += str
        i++
    }
    return result
}

// console.log(repeat("o", 3))