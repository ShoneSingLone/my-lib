let fs = require('fs');
var adm_zip = require('adm-zip');
const Client = require('@ventose/ssh2').Client;
const hostConfigs = {
    host: '***.***.***.*',
    port: 22,
    username: "username",
    password: "password",
};

const conn = new Client();

async function archiveFiles() {
    var zip = new adm_zip();
    zip.addLocalFolder('./node_modules');
    zip.writeZip('./node_modules.zip');
    return Promise.resolve("archive done");
}
async function setup() {
    console.log('Client : ready');
    function uploadZip() {
        return new Promise(resolve => {
            conn.sftp((err, sftp) => {
                if (err) throw err;
                sftp.fastPut("./node_modules.zip", '/home/username/Documents/demo/any.zip', (err) => {
                    if (err) throw err;
                    resolve('upload done');
                });
            });
        });
    }
    function execCommand() {
        conn.shell((err, stream) => {
            if (err) throw err;
            let dataIsDone = false;

            function Close() {
                if (Close.timer) {
                    clearTimeout(Close.timer);
                }

                Close.timer = setTimeout(() => {
                    conn.end();
                }, 1000 * 10);

            }
            stream
                .on('close', () => {
                    console.log('Stream :: close');
                })
                .on('data', (data) => {
                    const log = data.toString();
                    console.log(log);
                    if (!dataIsDone) {
                        dataIsDone = true;
                        stream.write('cd /home/shone/username/demo\n');
                        stream.write('unzip ./any.zip -d ./node_modules \n');
                        /*  stream.write(`su otheruser\n`); */
                    }
                    /* 
                    if (/password/ig.test(log)) {
                        stream.write('otheruser's pwd\n');
                    } */
                    Close();
                });
        });
    }

    console.log(await archiveFiles());
    console.log(await uploadZip());
    console.log(await execCommand());
}
conn.on('ready', setup).connect(hostConfigs);


