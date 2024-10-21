const arg = process.argv[2];
const words = arg.split(' ');
let res = '';

for (let word of words) {
    const half = Math.ceil(word.length / 2)
    const first = word.slice(0, half)
    const second = word.slice(half)
    res += second + first + ' '
}
console.log(res.trim());
