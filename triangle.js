function triangle(char, h) {
    let result = ''

    for (let i = 1; i <= h; i++) {
        result += char.repeat(i) + '\n'
    }

    return result.trim()
}

// console.log(triangle('*', 5));
