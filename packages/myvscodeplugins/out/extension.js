"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const Commands_1 = require("./shortKey/Commands");
const vscode_1 = require("vscode");
const VueProvider_1 = require("./importVue/VueProvider");
const path = require("path");
const fs = require("fs");
// Activate
// ========
function activate(context) {
    console.log("activete");
    const commandsTranspose = vscode.commands.registerTextEditorCommand("shone.sing.lone.transpose", Commands_1.transpose);
    context.subscriptions.push(commandsTranspose);
    const commandsSplitIntoLines = vscode.commands.registerTextEditorCommand("shone.sing.lone.splitIntoLines", Commands_1.splitIntoLines);
    context.subscriptions.push(commandsSplitIntoLines);
    try {
        console.log("workspace.rootPath", vscode_1.workspace.rootPath);
        let configs = fs.readFileSync(path.resolve(vscode_1.workspace.rootPath, "package.json"), "utf-8");
        configs = JSON.parse(configs);
        if (configs.useImportVue) {
            const provierImportVue = vscode.languages.registerDefinitionProvider([{ language: "vue", scheme: "file" }], new VueProvider_1.VueProvier());
            context.subscriptions.push(provierImportVue);
        }
    }
    catch (error) { }
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map