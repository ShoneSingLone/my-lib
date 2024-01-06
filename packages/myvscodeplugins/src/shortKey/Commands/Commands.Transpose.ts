import * as vscode from "vscode";
import { getNext, getPrev } from "../helperFunctions";
export function transposeCharacters(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) {
  const document = textEditor.document;
  textEditor.selections.forEach((selection: any) => {
    let p: vscode.Position = new vscode.Position(
      selection.active.line,
      selection.active.character
    );
    let nextPosition = getNext(p, document);
    if (nextPosition == null) {
      nextPosition = p;
      //@ts-ignore
      p = getPrev(p, document);
    }
    let prevPosition = getPrev(p, document);
    if (prevPosition == null) {
      return;
    }
    let nextSelection = new vscode.Selection(p, nextPosition);
    let nextChar = textEditor.document.getText(nextSelection);
    edit.delete(nextSelection);
    edit.insert(prevPosition, nextChar);
  });
}

export function transposeSelections(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) {
  const selectionText: any = textEditor.selections.map((selection: any) => {
    return textEditor.document.getText(selection);
  });
  // Transpose
  selectionText.unshift(selectionText.pop());

  for (let i = 0; i < selectionText.length; i++) {
    edit.replace(textEditor.selections[i], selectionText[i]);
  }
}

export function transpose(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) {
  if (textEditor.selections.every((s) => s.isEmpty)) {
    /* 光标，字母 */
    transposeCharacters(textEditor, edit);
  } else {
    /* 选中的文字 */
    transposeSelections(textEditor, edit);
  }
}
