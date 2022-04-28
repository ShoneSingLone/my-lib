const { tools } = require("../common");
const { asyncAllDirAndFile } = require("./asyncAllDirAndFile");
const { asyncSafeMakeDir } = require("./asyncSafeMakeDir");
const { asyncWriteFile } = require("./asyncWriteFile");



/**
 * 将源文件夹下的所有文件夹及文件复制到目标文件夹下，保持同样的接口
 * - 参数必须是绝对路径
 * @param {any} str_srcdir 原文件夹
 * @param {any} str_targetdir 目标文件夹
 */
async function asyncCpDir(str_srcdir, str_targetdir) {
    const [dirs, files] = await asyncAllDirAndFile([str_srcdir]);
    const startIndex = str_srcdir.length + 1;
    const asyncMakeFile = async (todo, handler) => {
        return await Promise.all(
            tools._.map(todo, async (path_src) => {
                var to = tools.path
                    .join(str_targetdir, path_src.slice(startIndex))
                    .replace(/[\\]/g, "/");
                console.log('🚀:', handler.name, JSON.stringify(to, null, 2));
                return await handler(path_src, to);
            })
        );
    };

    await asyncMakeFile(dirs, (src, to) => asyncSafeMakeDir(to));
    await asyncMakeFile(files, (src, to) => tools.asyncFs.copyFile(src, to));
}

exports.asyncCpDir = asyncCpDir;
