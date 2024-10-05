const cutFirst = (str) => str.slice(2)
const cutLast = (str) => str.slice(0, - 2)
const cutFirstLast = (str) => str.slice(2, -2)
const keepFirst = (str) => str.slice(0, 2)
const keepLast = (str) => str.slice(-2)
function keepFirstLast(s) {
    if (s.length < 4) {
        return s
    }
    return s.slice(0, 2) + s.slice(-2)
}
// console.log(cutFirst("omarelhaouch"))
// console.log(cutLast("omarelhaouch"))
// console.log(cutFirstLast("omarelhaouch"))
// console.log(keepFirst("omarelhaouch"))
// console.log(keepLast("omarelhaouch"))
// console.log(keepFirstLast("omarelhaouch"))