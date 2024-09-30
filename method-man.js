// function words(str, sep) {
//     return str.split(sep)
// }
// function sentence(arr, join) {
//     return arr.join(join)
// }
// function yell(str) {
//     return str.toUpperCase()
// }
// function whisper(str) {
//     return str.toLowerCase()
// }
// function capitalize(str) {
//     return str.charAt(0).toUpperCase().slice(1)
// }

const words = (str, sep) => str.split(sep)
const sentence = (str, join) => str.join(join)
const yell = (str) => str.toUpperCase()
const whisper = (str) => "*"+str.toLowerCase()+"*"
const capitalize = (str) => str.charAt(0).toUpperCase()+str.slice(1)

// const split = words("omar el haouc", " ")
// console.log(split)
// const join = (sentence(split, "//"))
// console.log(join)
// const up = (yell(join))
// console.log(up)
// const low = (whisper(up))
// console.log(low)
// const cap = (capitalize(low))
// console.log(cap)

