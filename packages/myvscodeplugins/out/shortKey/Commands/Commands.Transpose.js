"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpose = exports.transposeSelections = exports.transposeCharacters = void 0;
const vscode = require("vscode");
const helperFunctions_1 = require("../helperFunctions");
function transposeCharacters(textEditor, edit) {
    const document = textEditor.document;
    textEditor.selections.forEach((selection) => {
        let p = new vscode.Position(selection.active.line, selection.active.character);
        let nextPosition = (0, helperFunctions_1.getNext)(p, document);
        if (nextPosition == null) {
            nextPosition = p;
            //@ts-ignore
            p = (0, helperFunctions_1.getPrev)(p, document);
        }
        let prevPosition = (0, helperFunctions_1.getPrev)(p, document);
        if (prevPosition == null) {
            return;
        }
        let nextSelection = new vscode.Selection(p, nextPosition);
        let nextChar = textEditor.document.getText(nextSelection);
        edit.delete(nextSelection);
        edit.insert(prevPosition, nextChar);
    });
}
exports.transposeCharacters = transposeCharacters;
function transposeSelections(textEditor, edit) {
    const selectionText = textEditor.selections.map((selection) => {
        return textEditor.document.getText(selection);
    });
    // Transpose
    selectionText.unshift(selectionText.pop());
    for (let i = 0; i < selectionText.length; i++) {
        edit.replace(textEditor.selections[i], selectionText[i]);
    }
}
exports.transposeSelections = transposeSelections;
function transpose(textEditor, edit) {
    if (textEditor.selections.every((s) => s.isEmpty)) {
        /* 光标，字母 */
        transposeCharacters(textEditor, edit);
    }
    else {
        /* 选中的文字 */
        transposeSelections(textEditor, edit);
    }
}
exports.transpose = transpose;
//# sourceMappingURL=Commands.Transpose.js.map