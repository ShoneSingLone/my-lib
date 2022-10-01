const { tools } = require("../common");
const path = require("path");
const SMB2 = require('smb2');


exports.SMB2 = options => {
    const smb2Client = new SMB2(options);
    return {
        cache: {},
        exec(method) {
            return url => new Promise((resolve, reject) => {
                if (this.cache[url]) {
                    resolve(this.cache[url]);
                }

                smb2Client[method](url, (err, res) => {
                    if (err) {
                        reject(err);
                    }

                    this.cache[url] = res;
                    resolve(res);
                });
            });
        },
        /**
 * 给定文件夹，获取文件夹下所有文件夹和文件
 * 
 * @param {*} array_all ["/home/user/doc"] 需要在传入之前对路径用pathD处理成绝对路径
 * @param {any} array_dir []
 * @param {any} array_file []
 * @returns [dirs,files]
 * 
 * exists
rename
readFile
writeFile
unlink
readdir
rmdir
mkdir
 */
        async asyncAllDirAndFile(array_all, array_dir = [], array_file = []) {
            const path_current = array_all.pop();
            let isDirectory = false;
            try {
                isDirectory = await this.exec("readdir")(path_current);
            } catch (error) {
                console.log(path.extname(path_current));
            }
            if (isDirectory) {
                array_dir.push(path_current);
                const dirs = await this.exec("readdir")(path_current);
                const path_sub_dirs = dirs.map((dirName) => [path_current, dirName].join(path.sep));
                /* 拼接路径 */
                array_all = array_all.concat(path_sub_dirs);
            } else {
                array_file.push(path_current);
            }
            if (array_all.length > 0) {
                return this.asyncAllDirAndFile(array_all, array_dir, array_file);
            }
            return [array_dir, array_file];
        }
    };

};




