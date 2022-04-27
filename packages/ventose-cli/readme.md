# cli
## deploy
- 通过scp上传dist
- 上传文件（夹）到远程服务器
  - ventose deploy -c ./privateConfigs.js [D:/privateConfigs.js]可在本地其他地方，避免上传到代码库
  - ventose deploy -g 获取配置信息文件demo
- 配置信息文件demo如下
```js
module.exports = {
  deploy: {
    username: "do_not_use_root",
    port: 22,
    password: "nobody*known?",
    host: "66.66.666.6",
    localDir: "./dist",
    remoteDir: "/root/ventose/static/balabalba ",
  },
};
```