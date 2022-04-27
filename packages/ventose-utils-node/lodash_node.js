const { tools } = require("./libs/common");

const lodash_node = { _n: tools._ };

const { asyncRmDir } = require("./libs/fp/asyncRmDir");
tools._.asyncRmDir = asyncRmDir;

const { asyncSafeMakeDir } = require("./libs/fp/asyncSafeMakeDir");
tools._.asyncSafeMakeDir = asyncSafeMakeDir;

const { asyncWriteFile } = require("./libs/fp/asyncWriteFile");
tools._.asyncWriteFile = asyncWriteFile;

const { dirName } = require("./libs/fp/dirName");
tools._.dirName = dirName;

const { pathC } = require("./libs/fp/pathC");
tools._.pathC = pathC;

const { pathD } = require("./libs/fp/pathD");
tools._.pathD = pathD;

const { pathR } = require("./libs/fp/pathR");
tools._.pathR = pathR;


/*_n:lodash_node*/
module.exports = lodash_node;