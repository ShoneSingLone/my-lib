const { Ssh2Client } = require("./Ssh2Client");
const { optionsSSH2Test } = require("d:/privateConfigs");

const {
  username,
  port,
  password,
  host,
  localDir,
  remoteBaseUrl
} = optionsSSH2Test;

const ssh2Client = new Ssh2Client({
  username,
  port,
  password,
  host,
  localDir,
  remoteBaseUrl,
});

ssh2Client.deploy();
