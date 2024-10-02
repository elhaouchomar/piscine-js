function split(str, sep) {
    let ar = []
    if (sep == null) {
        ar[ar.length] = str
        return ar
    }
    if (sep === '') {
        for (let i = 0; i < str.length; i++) {
            ar[ar.length] = str[i]
        }
        return ar
    }
    let str = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sep[0]) {
            let x = sep[0]
            for (let j = 1; j < sep.length; j++) {
                x += sep[j]
                i++
            }
            if (x == sep) {
                ar[ar.length] = str
                str = ""
            }
            if (i === str.length - 1) {
                ar[ar.length] = str
            }
            continue
        }
        str += str[i]
    }
    if (str !== "") {
        ar[ar.length] = str
    }
    if (ar.length === 0) {
        ar[ar.length] = str
    }
    return ar
}
function join(arr, sep) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += arr[i]
            break
        }
        str += arr[i] + sep
    }
    return str
}