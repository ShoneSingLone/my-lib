const path = require("path");
const Client = require("../index").Client;
const { asyncAllDirAndFile } = require("@ventose/utils-node")._n;

/**
const { Ssh2Client } = require("@ventose/utils-node");

const ssh2Client = new Ssh2Client({
    port: 22,
    username: "username",
    password: "pwd",
    host: "1.x.x.1",
    localDir: "./dist",
    remoteDir: "/usr/doc/remote/test",
  });

ssh2Client.deploy();

 * @param {*} configs 
 */
function Ssh2Client(configs) {
  this.configs = configs;
  this.conn = new Client();

  this.setup = async () => {
    const { localDir, remoteBaseUrl } = this.configs;
    const localDirBaseName = path.basename(localDir);
    const [dirs, files] = await asyncAllDirAndFile([path.resolve(localDir)]);
    const remote_dirs = dirs.map((i) =>
      path.join(remoteBaseUrl, i.split(localDirBaseName)[1])
    );
    let remoteTarget;
    while ((remoteTarget = remote_dirs.pop())) {
      await this.asyncSafeMakeDir(remoteTarget);
    }
    const remote_files = files.map((i) => [
      i,
      path.join(remoteBaseUrl, i.split(localDirBaseName)[1]),
    ]);

    while ((remoteTarget = remote_files.pop())) {
      const [local, remote] = remoteTarget;
      await this.asyncUploadFile(local, remote);
    }
  };

  this.asyncUploadFile = (local, remote) => {
    return new Promise((resolve) => {
      remote = remote.split(path.sep).join("/");
      this.sftp.fastPut(local, remote, (err) => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  };

  this.asyncIsExist = (url) => {
    return new Promise((resolve, reject) => {
      url = url.split(path.sep).join("/");
      this.sftp.stat(url, (err, stats) => {
        if (err) {
          if (err.message === "No such file") {
            resolve(false);
          } else {
            reject(err);
          }
        } else {
          resolve(stats);
        }
      });
    });
  };
  this.asyncMkdir = (url) => {
    console.log("async mkdir", url);
    url = url.split(path.sep).join("/");
    return new Promise((resolve) => {
      this.sftp.mkdir(url, (err) => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  };
  this.asyncSafeMakeDir = async (dirUrl) => {
    if (!dirUrl) {
      return false;
    }
    if (await this.asyncIsExist(dirUrl)) {
      return true;
    }

    const dirParentUrl = path.dirname(dirUrl);
    if (!(await this.asyncIsExist(dirParentUrl))) {
      await this.asyncSafeMakeDir(dirParentUrl);
    }
    return await this.asyncMkdir(dirUrl);
  };

  this.deploy = (functionExpression) => {
    this.conn.on("ready", async () => {
      return new Promise(async (sftpConnectResolve, sftpConnectReject) => {
        this.conn.sftp(async (err, sftp) => {
          if (err) {
            console.error(err);
            sftpConnectReject(err);
          }
          this.sftp = sftp;

          if (typeof functionExpression === "function") {
            await functionExpression.call(this);
          } else {
            await this.setup();
          }
          this.conn.end();
          sftpConnectResolve(this);
        });
      });
    });
    this.conn.connect(configs);
  };
}

exports.Ssh2Client = Ssh2Client;
