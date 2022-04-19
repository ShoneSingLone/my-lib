const fs = require("fs");
const { _ } = require("@ventose/utils-node");
const fsAsync = fs.promises;

async function main() {
    const path_privatConfigsFile = _.$pathR("private/configs.js");
    console.log(_.$pathDir(path_privatConfigsFile));
    const isExit = fs.existsSync(path_privatConfigsFile);
    if (!isExit) {
        const content_privateConfigsFile = await fsAsync.readFile(_.$pathR("./demo/privateConfigs.js"));
        await _.$writeFileForce(path_privatConfigsFile, content_privateConfigsFile);
    }

    /* 注意敏感信息不要提交 */
    const path_gitignore = _.$pathR(".gitignore");
    if (fs.existsSync(path_gitignore)) {
        fs.appendFileSync(path_gitignore, "\n" + path_privatConfigsFile);
    }
}
main();



