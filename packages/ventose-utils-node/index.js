
const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const fsAsync = fs.promises;

_.$pathR = (...args) => path.resolve.apply(path, args);
_.$pathDir = (p) => path.dirname(p);
_.$safeMakeDir = async (path_dir) => {
    if (fs.existsSync(path_dir)) {
        return true;
    }
    const path_dirParent = _.$pathDir(path_dir);
    if (!fs.existsSync(path_dirParent)) {
        await _.$safeMakeDir(path_dirParent);
        console.log("🚀dirParent", path_dirParent);
    }
    await fsAsync.mkdir(path_dir);
};

_.$writeFileForce = async (path_file, content) => {
    if (!fs.existsSync(path_file)) {
        const path_fileParent = _.$pathDir(path_file);
        if (!fs.existsSync(path_fileParent)) {
            await _.$safeMakeDir(path_fileParent);
        }
    }
    await fsAsync.writeFile(path_file, content);
};

module.exports = { _ };