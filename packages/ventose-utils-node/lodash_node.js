const { tools } = require("./libs/common");

/*_n:lodash_node*/
module.exports._n = {
    ...tools._,
    asyncRmDir : require("./libs/fp/asyncRmDir").asyncRmDir,
    asyncSafeMakeDir : require("./libs/fp/asyncSafeMakeDir").asyncSafeMakeDir,
    asyncWriteFile : require("./libs/fp/asyncWriteFile").asyncWriteFile,
    dirName : require("./libs/fp/dirName").dirName,
    pathC : require("./libs/fp/pathC").pathC,
    pathD : require("./libs/fp/pathD").pathD,
    pathR : require("./libs/fp/pathR").pathR,
};