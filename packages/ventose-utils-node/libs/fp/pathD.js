const { tools } = require("../common");
/**
 * path.resolve(__dirname,...args) 简写
 * @param  {...any} args
 * @returns
 */
function pathD(...args) {
  return tools.path.resolve.applay(tools.path, [__dirname, ...args]);
}
exports.pathD = pathD;
