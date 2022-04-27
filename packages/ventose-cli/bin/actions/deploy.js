const fs = require("fs");
const path = require("path");
const SftpClient = require("ssh2-sftp-client");

const pathCwd = (...args) => {
  return path.resolve.apply(path, [process.cwd()].concat(args));
};

function log(fnGetContent) {
  console.log("====>", fnGetContent());
  if (log.continue) {
    setTimeout(() => {
      log(fnGetContent);
    }, 1000);
  }
}

async function uploadDir(serverInfo) {
  const client = new SftpClient("upload-dir");
  const { localDir, remoteDir } = serverInfo;
  try {
    await client.connect(serverInfo);
    client.on("upload", (info) => {
      console.log(`Listener: Uploaded ${info.source}`);
    });
    return await client.uploadDir(pathCwd(localDir), remoteDir);
  } finally {
    client.end();
  }
}

exports.ActionDeploy = {
  name: "deploy",
  description: `上传文件（夹）到远程服务器
    1.-> ventose deploy -c d:/privateConfigs.js [d:/privateConfigs.js]在本地其他地方，避免上传到代码库
    2.-> ventose deploy -g 获取配置信息文件demo
  `,
  async handler(options) {
    let i = 0;
    function fnCount() {
      return `wait ${++i} s`;
    }

    if (options.configs) {
      if (fs.existsSync(options.configs)) {
        console.log("====>"`exec deploy`);
        log.continue = true;
        log(fnCount);
        try {
          const { deploy: configs } = require(pathCwd(options.configs));
          await uploadDir(configs);
        } catch (error) {
          console.error(error);
        } finally {
          log.continue = false;
        }
      } else {
        console.log(`
        获取配置信息失败，请确保信息正确。
        ventose deploy -g 获取配置信息文件demo
        `);
      }
      return;
    }
    if (options.getConfigs) {
      console.log("====>"`Exec GetConfigsTemplate`);
      const configsContent = `/**/
module.exports = {
  deploy: {
    username: "do_not_use_root",
    port: 22,
    password: "nobody*known?",
    host: "66.66.666.6",
    localDir: "./dist",
    remoteDir: "/root/ventose/static/balabalba ",
  },
};`;
      var targetPath = pathCwd("./privateConfigs.js");
      fs.writeFileSync(targetPath, configsContent);
      /* 注意敏感信息不要提交 */
      const path_gitignore = pathCwd(".gitignore");
      if (fs.existsSync(path_gitignore)) {
        fs.appendFileSync(path_gitignore, "\nprivateConfigs.js");
      }
      console.log("🚀注意:", `不要提交敏感信息`);
      return;
    }

    console.error("未明确命令，使用 ventose -h 查看命令");
  },
  appendTo(program) {
    program
      .command(this.name)
      .description(this.description)
      .option("-c, --configs <string>", `配置信息文件地址`)
      .option("-g, --getConfigs", `获取配置信息文件demo)`)
      .action(this.handler);
  },
};
