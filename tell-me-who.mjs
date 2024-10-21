import { readdir } from "fs/promises";
import { resolve } from "path";

const lists = async (dir = '.') => {
    try {
        const files = await readdir(resolve(dir));
        files
            .map(f => f.replace('.json', '').split('_'))
            .sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]))
            .forEach((list, i) => console.log((i + 1) + '. ' + list[1] + ' ' + list[0]));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

lists(process.argv[2]);
