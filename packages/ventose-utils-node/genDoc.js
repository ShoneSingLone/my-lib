const { tools } = require("./libs/common");
const newLine = "\r\n";
function getFnNames() {
  return tools.fs
    .readdirSync("./libs/fp")
    .filter((name) => !/\.test\.js$/.test(name))
    .map((name) => name.slice(0, name.length - 3)).sort();
}

function genMdSummary(title, content) {
  return `\r\n<details>
  <summary> ${title} </summary>
  <br>
  ${content}
</details>
`;
}

let fnNames = getFnNames();
const readMeMd = "./readme.md";
tools.fs.writeFileSync(readMeMd, `# Ventose-utils-node`);
tools._.each(fnNames, (fnName) => {
  const fnSrcString = tools.fs.readFileSync(`./libs/fp/${fnName}.js`, "utf-8");
  const block_regex = /\/\*\*([\s\S]*?)\*\//gm;
  const blocks = fnSrcString.match(block_regex);
  if (Array.isArray(blocks) && blocks.length > 0) {
    let block = blocks[0].split(newLine);
    const content = block
      .map((lineString) => {
        if (lineString.startsWith("/**")) {
          return lineString.replace("/**", "\r\n```js\r\n/**");
        }
        if (lineString.endsWith("*/")) {
          return lineString.replace("*/", "*/\r\n```");
        }
        return lineString;
      })
      .join(newLine);
    tools.fs.appendFileSync(readMeMd, genMdSummary(fnName, content));
  }
});

exports.getFnNames = getFnNames;
