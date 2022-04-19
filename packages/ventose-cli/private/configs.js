const path = require("path");
console.log('🚀:',' path.resolve(__dirname)', JSON.stringify( path.resolve(__dirname), null, 2));



module.exports = {
  /* 通过scp部署dist的文件 */
  /* 需要远程服务器的地址 */
  /* 当前 */
  depl: {
    "remote": {
      "host": "",
      "port": "",
      "username": "username",
      "pwd": "pwd"
    },
    dist: {
      path: path.resolve(__dirname, './dist')
    }
  }
};