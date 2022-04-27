const asyncSafeMakeDir = require("./asyncSafeMakeDir");

/**
 * force写入文件：没有文件就创建，有就覆盖
 * @param {*} path_file
 * @param {*} content
 */
async function asyncWriteFile(path_file, content) {
  if (!fs.existsSync(path_file)) {
    const path_fileParent = _.$pathDir(path_file);
    if (!fs.existsSync(path_fileParent)) {
      await asyncSafeMakeDir(path_fileParent);
    }
  }
  await _asyncFs.writeFile(path_file, content);
}

exports.asyncWriteFile = asyncWriteFile;
