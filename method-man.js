// function words(str) {
//     return str.split(" ")
// }
// function sentence(arr) {
//     return arr.join(" ")
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

const words = (str) => str.split(" ")
const sentence = (str) => str.join(" ")
const yell = (str) => str.toUpperCase()
const whisper = (str) => "*"+str.toLowerCase()+"*"
const capitalize = (str) => str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()

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

