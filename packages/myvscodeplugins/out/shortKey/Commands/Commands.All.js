"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommandsQuoteItArray = exports.getCommandsQuoteIt = exports.getCommandsSplitIntoLines = exports.getCommandsTranspose = void 0;
const vscode = require("vscode");
const Commands_Transpose_1 = require("./Commands.Transpose");
const Commands_SplitIntoLines_1 = require("./Commands.SplitIntoLines");
const Commands_QuoteIt_1 = require("./Commands.QuoteIt");
// Commands
// ========
function getCommandsTranspose() {
    return vscode.commands.registerTextEditorCommand("shone.sing.lone.transpose", Commands_Transpose_1.transpose);
}
exports.getCommandsTranspose = getCommandsTranspose;
function getCommandsSplitIntoLines() {
    return vscode.commands.registerTextEditorCommand("shone.sing.lone.splitIntoLines", Commands_SplitIntoLines_1.splitIntoLines);
}
exports.getCommandsSplitIntoLines = getCommandsSplitIntoLines;
function getCommandsQuoteIt() {
    return vscode.commands.registerTextEditorCommand("shone.sing.lone.QuoteIt", Commands_QuoteIt_1.quoteIt);
}
exports.getCommandsQuoteIt = getCommandsQuoteIt;
function getCommandsQuoteItArray() {
    return vscode.commands.registerTextEditorCommand("shone.sing.lone.QuoteIt.Array", Commands_QuoteIt_1.quoteItArray);
}
exports.getCommandsQuoteItArray = getCommandsQuoteItArray;
//# sourceMappingURL=Commands.All.js.map