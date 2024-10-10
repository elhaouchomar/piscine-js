function longWords(arr) {
    return arr.every(value => value.length >= 5)
}

const array1 = ['jinjkd', 5, 'fgfdd', 'kffgf'];

console.log(longWords(array1));

function oneLongWord(arr) {
    return arr.some(value => value.length >= 10)
}
console.log(oneLongWord(array1));

function noLongWords(arr) {
    return arr.every(value => typeof value !== 'string' || value.length < 7)
}
console.log(noLongWords(array1));