function ionOut(str) {

    let regex = /(\w+)(t)(?=ion)/g
    let result = str.match(regex)

    return result || []
}
//console.log(ionOut('attention, direction'));