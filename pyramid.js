function pyramid(str, n) {
    let result = "";
    for (let i = 0; i < n - 1; i++) {
        const spaces = ' '.repeat(n - i - 1); 
        const characters = str.repeat(i * 2 + 1); 
        result += spaces + characters + '\n'; 
    }
    const lastLineSpaces = ' '.repeat(0); 
    const lastLineCharacters = str.repeat(n * 2 - 1); 
    result += lastLineSpaces + lastLineCharacters;

    return result;
}

// console.log(pyramid('*', 5));
