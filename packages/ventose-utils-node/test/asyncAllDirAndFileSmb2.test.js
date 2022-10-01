const { SMB2 } = require("../libs/smb2/index");
const { getPathD } = require("../libs/fp/getPathD");
const pathD = getPathD(__dirname);

(async () => {

    const client = SMB2({
        share: `\\\\192.168.68.1\\sda1`,
        domain: '',
        username: 'hehehehhe',
        password: 'hehehehhe',
    });
    /* \\192.168.68.1\sda1\resource\Music */
    const res = await client.asyncAllDirAndFile(['resource\\Music'], [], []);
    console.log("🚀", res);
})();
