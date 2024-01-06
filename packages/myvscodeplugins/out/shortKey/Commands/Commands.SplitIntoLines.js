"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitIntoLines = void 0;
const vscode = require("vscode");
function splitIntoLines(textEditor, edit) {
    let newSelections = [];
    for (let selection of textEditor.selections) {
        if (selection.isSingleLine) {
            newSelections.push(selection);
            continue;
        }
        let line = textEditor.document.lineAt(selection.start);
        newSelections.push(new vscode.Selection(selection.start, line.range.end));
        for (let lineNum = selection.start.line + 1; lineNum < selection.end.line; lineNum++) {
            line = textEditor.document.lineAt(lineNum);
            newSelections.push(new vscode.Selection(line.range.start, line.range.end));
        }
        if (selection.end.character > 0) {
            newSelections.push(new vscode.Selection(selection.end.with(undefined, 0), selection.end));
        }
    }
    textEditor.selections = newSelections;
}
exports.splitIntoLines = splitIntoLines;
//# sourceMappingURL=Commands.SplitIntoLines.js.map