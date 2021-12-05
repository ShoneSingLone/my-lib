const yargs = require('yargs');

const readFile = require('fs').readFile;

const argv = yargs
    .demand('f')
    .nargs('f', 1)
    .describe('f', 'JSON file to parse')
    .argv;

const file = argv.f;

console.log('file', file);

readFile(file, "utf-8", (err, dataBuffer) => {
    if (err) return;
    console.log(dataBuffer);
});