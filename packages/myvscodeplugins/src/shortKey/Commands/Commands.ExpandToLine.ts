import * as vscode from "vscode";
export function expandToLine(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) {
  let newSelections: vscode.Selection[] = [];
  for (let selection of textEditor.selections) {
    newSelections.push(
      new vscode.Selection(
        selection.start.with(undefined, 0),
        selection.end.with(selection.end.line + 1, 0)
      )
    );
  }
  textEditor.selections = newSelections;
}
