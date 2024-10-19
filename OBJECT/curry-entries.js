// const fs = require('fs')

//---------------------- way 1  ---------------------

// function defaultCurry(obj1) {
//     return function (obj2) {
//         return { ...obj1, ...obj2 }
//     }
// }

// const obj1 = JSON.parse(fs.readFileSync('data1.json', 'utf8'))
// const obj2 = JSON.parse(fs.readFileSync('data2.json', 'utf8'))
// console.log(defaultCurry(obj1, obj2))


//---------------------- way 2  ---------------------

// function defaultCurry(obj1) {
//     const result = {}
//     return function (obj2) {
//         Object.keys(obj1).forEach(key => {
//             result[key] = obj1[key]
//         })
//         Object.keys(obj2).forEach(key => {
//             result[key] = obj2[key]
//         })
//         return result
//     }
// }
//---------------------- way 3  ---------------------

// function defaultCurry(obj1) {
//     return function (obj2) {
//         const result = {}
//         for (const key in obj1) {
//             result[key] = obj1[key]
//         }
//         for (const key in obj2) {
//             result[key] = obj2[key]
//         }
//         return result
//     }
// }


//---------------------- way 4  ---------------------

// function defaultCurry(obj1) {
//     return function(obj2) {
//         return Object.fromEntries([
//             ...Object.entries(obj1),
//             ...Object.entries(obj2)
//         ])
//     }
// }

//---------------------- way 5  ---------------------

// function defaultCurry(obj1) {
//     return function (obj2) {
//         const result = [obj1, obj2].reduce((acc, o) => {
//             return {...acc, ...o}
//         })
//         return result
//     }
// }

//---------------------- way 6  ---------------------

// function defaultCurry(obj1) {
//     return function (obj2) {
//         return Object.assign({}, obj1, obj2)
//     }
// }
// console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
// })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
// }))
//-------------------------------------------------------------------------------------

const defaultCurry = (obj1) => (obj2) => 
    Object.entries({ ...obj1, ...obj2 }).reduce((acc, [k, v]) => {
        acc[k] = v 
        return acc
    }, {})

const mapCurry = (mappingFn) => (o) => 
    Object.fromEntries(Object.entries(o).map(([k, v]) => mappingFn([k, v])))

const reduceCurry = (reducerFn) => (o, initial) => 
    Object.entries(o).reduce((acc, [k, v]) => reducerFn(acc, [k, v]), initial)

const filterCurry = (filterFn) => (o) => 
    Object.fromEntries(Object.entries(o).filter(([k, v]) => filterFn([k, v])))

// const personnel = {
//     lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
//     sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
//     calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
// }

const reduceScore = (o, initial) => 
    reduceCurry((total, [k, v]) => 
        v.isForceUser ? total + (v.pilotingScore + v.shootingScore) : total)(o, initial)

const filterForce = filterCurry(([k, v]) => 
    v.isForceUser && v.shootingScore >= 80)

const mapAverage = mapCurry(([k, v]) => {
    const averageScore = (v.pilotingScore + v.shootingScore) / 2
    return [k, { ...v, averageScore }]
})

// const totalScore = reduceScore(personnel, 0)
// console.log(totalScore)

// const filteredForceUsers = filterForce(personnel)
// console.log(filteredForceUsers)

// const averageScores = mapAverage(personnel)
// console.log(averageScores)
