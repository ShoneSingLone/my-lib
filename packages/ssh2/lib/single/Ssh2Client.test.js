const { Ssh2Client } = require("./Ssh2Client");

const ssh2Client = new Ssh2Client({
  username: "root",
  port: 22,
  password: "Pbu4@123",
  host: "10.143.131.161",
  localDir: "E:/github/my-lib/packages/ventose-utils-node/libs/gendemo",
  remoteBaseUrl: "/opt/ghso/html/aliyun/test",
});

ssh2Client.deploy();
