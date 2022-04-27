const { exec } = require("child_process");

const asyncExec = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      stdout && resolve(stdout);
      stderr && resolve(stderr);
    });
  });
};

async function main() {
  let step = 0;
  let res = ["start"];
  if (step === 0) {
    try {
      const tips = await asyncExec("nrm");
      res[step++] = tips;
    } catch (error) {
      res[step] = res[step] + " error";
    }
  }
  if (step === 1) {
    try {
      const tips = [, await asyncExec(`echo hello`)];
      res[step++] = tips;
    } catch (error) {
      debugger;
    }
  }

  res.forEach((info, index) => {
    console.log(index, "info", JSON.stringify(info, null, 2));
  });
}

main();
