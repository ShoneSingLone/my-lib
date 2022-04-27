const { tools } = require("../common");

/**
 * 删除目录
 * @param {*} pathName
 * @returns
 */
function asyncRmDir(pathName) {
  return tools.asyncFs.unlink(pathName);
}

exports.asyncRmDir = asyncRmDir;
