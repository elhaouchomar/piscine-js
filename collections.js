// const arr = [2, 2, 1, 2]

// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)

// const str = 'hello'

// const map = new Map()
// map.set('a', 1)
// map.set('b', 2)
// map.set(3, 'c')
// map.set(4, 'd')

// const obj = {x: 45, y: 75, radius: 24 }

const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join('')
const setToArr = (set) => Array.from(set)
const strToArr = (str) => Array.from(str)
const strToSet = (str) => new Set(str)
const mapToObj = (map) =>  Object.fromEntries(map)
const objToArr = (obj) => Object.values(obj)
const objToMap = (obj) => new Map(Object.entries(obj))
const arrToObj = (arr) => arr.reduce((key, value, index) => {
    key[index] = value
    return key
}, {})
const strToObj = (str) => Object.fromEntries(str.split(',').map(key => key.split(':')))

// console.log(arrToSet(arr))
// console.log(arrToStr(arr))
// console.log(setToArr(set))
// console.log(set)
// console.log(strToArr(str))
// console.log(strToSet(str))
// console.log(mapToObj(map))
// console.log(objToArr(obj))
// console.log(objToMap(obj))
// console.log(arrToObj(arr))
// console.log(strToObj(str))