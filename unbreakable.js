function check(str, start, end) {
    let result = '';
    for (let i = start; i < end && i < str.length; i++) {
        result += str[i];
    }
    return result;
}

function split(str, sep) {
    const result = [];
    let current = '';
    for (let i = 0; i < str.length; i++) {
        if (check(str, i, i + sep.length) === sep) {
            result[result.length] = current
            current = '';
            i += sep.length - 1;
        } else {
            current += str[i];
        }
    }
    result.push(current);
    return result;
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

const str = "hello world";
const sep = " ";
console.log(split(str, sep));
console.log(join(['o', 'm', 'a', 'r'], ''))