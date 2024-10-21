const arg = process.argv[2];
const array = arg.split(' ');
let res = '';

for (let i = array.length - 1; i >= 0; i--) {
    if (i !== 0 ) {
        res += array[i] + ' '
    } else {
        res += array[i]
    }
}

console.log(res);
