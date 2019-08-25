let currentScriptPath, currentScript;
if ((currentScript = window.document.currentScript) && (currentScript = currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    currentScriptPath = currentScript[1];
}

export default subpath => {
    /* 协议 | 绝对路径 */
    let regExp = new RegExp("^http(s?)://(.*)$|^/\\s*(.*)$");
    if (regExp.test(subpath)) return subpath;
    /* 相对路径 */
    regExp = new RegExp("^./(.*)$");
    if (regExp.test(subpath)) {
        subpath = subpath.match(regExp)[1];
        console.log('subpath',subpath);
        return currentScriptPath + subpath;
    }
    alert("currentScriptPath: ", currentScriptPath, "subpath: ", subpath);
};