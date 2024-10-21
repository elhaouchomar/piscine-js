import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
import test from 'node:test';

const path = argv[2] ? argv[2] : argv[1].replace(/\/?$/, '');

try {
    const files = await readdir(path);
    console.log(files.length);
} catch (error) {
    console.log(error);
}
