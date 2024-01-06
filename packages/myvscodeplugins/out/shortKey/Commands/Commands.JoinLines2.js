"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinLines = void 0;
const vscode = require("vscode");
const helperFunctions_1 = require("../helperFunctions");
function joinLines(textEditor, edit) {
    const document = textEditor.document;
    let newSelections = [];
    for (const selection of textEditor.selections) {
        if (selection.isEmpty) {
            const range = (0, helperFunctions_1.joinLineWithNext)(selection.start.line, edit, document);
            if (range) {
                newSelections.push(new vscode.Selection(range.end, range.end));
            }
            else {
                newSelections.push(selection);
            }
        }
        else {
            for (let lineNum = selection.start.line; lineNum <= selection.end.line; lineNum++) {
                (0, helperFunctions_1.joinLineWithNext)(lineNum, edit, document);
            }
            newSelections.push(selection);
        }
    }
    textEditor.selections = newSelections;
}
exports.joinLines = joinLines;
//# sourceMappingURL=Commands.JoinLines2.js.map