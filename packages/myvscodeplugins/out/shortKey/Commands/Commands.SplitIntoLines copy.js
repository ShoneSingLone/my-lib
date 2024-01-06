"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinLines = exports.expandToLine = exports.splitIntoLines = void 0;
const vscode = require("vscode");
const helperFunctions_1 = require("../helperFunctions");
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
function expandToLine(textEditor, edit) {
    let newSelections = [];
    for (let selection of textEditor.selections) {
        newSelections.push(new vscode.Selection(selection.start.with(undefined, 0), selection.end.with(selection.end.line + 1, 0)));
    }
    textEditor.selections = newSelections;
}
exports.expandToLine = expandToLine;
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
//# sourceMappingURL=Commands.SplitIntoLines%20copy.js.map