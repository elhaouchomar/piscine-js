import fs from 'fs'
const pathDir = process.argv[2] || process.cwd()

try {
    const files = fs.readdirSync(pathDir);
    console.log(files.length);
} catch (err) {
    console.error(err);
}
