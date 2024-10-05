function pyramid(str, n) {
    let result = "";
    let repeatspace = ' '.repeat(str.length)
    for (let i = 0; i < n - 1; i++) {
        const spaces = repeatspace.repeat(n - i - 1);
        const characters = str.repeat(i * 2 + 1);
        result += spaces + characters + '\n';
    }
    const lastLineSpaces = ' '.repeat(0);
    const lastLineCharacters = str.repeat(n * 2 - 1);
    result += lastLineSpaces + lastLineCharacters;

    return result;
}

// console.log(pyramid('{kkerqerh}', 5));
