const fs = require("fs");
const fsAsync = fs.promises;
const path = require("path");
const rPath = (...args) => path.resolve.apply(path, args);


function safeMakeDir(path_dir) {
    if (fs.existsSync(path_file)) {
        return true;
    } else {
        return 
    }
}
function isFileExist(path_file) {
    console.log('🚀:', 'ensureFile', path_file);
    if (fs.existsSync(path_file)) {
        return true;
    } else {
        const path_fileParent = path.dirname(path_file);
        if (fs.existsSync(path_fileParent)) {
            return true;
        } else {
            return safeMakeDir(path_fileParent);
        }
    }
}

async function main() {
    const path_privatConfigsFile = rPath("private/configs.js");
    console.log(path.dirname(path_privatConfigsFile));
    const isExit = fs.existsSync(path_privatConfigsFile);
    if (!isExit) {
        const content_privateConfigsFile = await fsAsync.readFile(rPath("./demo/privateConfigs.js"));
        isFileExist(path_privatConfigsFile);
        // fs.writeFileSync(path_privatConfigsFile, content_privateConfigsFile, { flag: 'a' });
    }

    /* 注意敏感信息不要提交 */
    const path_gitignore = rPath(".gitignore");
    if (fs.existsSync(path_gitignore)) {
        fs.appendFileSync(path_gitignore, "\n" + path_privatConfigsFile);
    }
}

// main();
console.log(path.dirname(rPath("./demo")));


