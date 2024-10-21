import { readdirSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
import test from 'node:test';

const path = argv[2]

try {
    const files = readdirSync(path);
    console.log(files.length);
} catch (error) {
    console.log(error);
}
