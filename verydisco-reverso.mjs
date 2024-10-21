import { error } from 'console'
import fs from 'fs'


let res = ''

try {
    const arg = fs.readFileSync(process.argv[2], 'utf-8')
    const words = arg.split(' ')
    for (const word of words) {
        const harf = Math.floor(word.length / 2)
        const first = word.slice(0, harf)
        const second = word.slice(harf)
        res += second + first + ' '
    }
    console.log(res.trim());
} catch (error) {
    console.error('Error reading file:', error.message)
}