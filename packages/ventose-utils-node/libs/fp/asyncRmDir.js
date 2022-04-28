const { tools } = require("../common");

/**
 * 删除目录
 * @param {*} string_pathName
 * @returns
 */
function asyncRmDir(string_pathName) {
  return tools.asyncFs.unlink(string_pathName);
}

exports.asyncRmDir = asyncRmDir;
