const { tools } = require("../common");
/**
 * path.resolve 简写
 * @param  {...any} args
 * @returns
 */
function pathR(...args) {
  return tools.path.resolve.applay(tools.path, [...args]);
}
exports.pathR = pathR;
