const fsextra = require('fs-extra');
const path = require('path');

let sourceDir = path.resolve(__dirname, '../dist/');
let deployStaticsDir = path.resolve(__dirname, "../..", 'ShoneSingLone.github.io/my-lib');
// Sync:
if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
    console.log('__dirname:', __dirname, '\nfrom:', sourceDir, '\nto:', deployStaticsDir)
    fsextra.copy(sourceDir, deployStaticsDir)
        .then(() => {
            console.log('move success', deployStaticsDir)
        })
        .catch(err => {
            console.error(err)
        })
}