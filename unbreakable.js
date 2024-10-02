function split(str, sep) {
    const result = []
    let current = ''
    for (let i = 0; i < str.length; i++) {
        if(str.slice(i, i + sep.length) === sep) {
            result.push(current)
            current = ''
            i += sep.length - 1
        } else {
            current += str[i]
        }
    }
    result.push(current)
    return result
}

function join(arr, sep) {
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i < sep.length - 1) {
            result += sep
        }
    }
    return result
}

// console.log(split('o m a r', ' '))
// console.log(join([ 'o', 'm', 'a', 'r' ], ''))