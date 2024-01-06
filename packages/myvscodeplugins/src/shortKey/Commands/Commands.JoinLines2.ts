import * as vscode from "vscode";
import { joinLineWithNext } from "../helperFunctions";

export function joinLines(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) {
  const document = textEditor.document;

  let newSelections: vscode.Selection[] = [];

  for (const selection of textEditor.selections) {
    if (selection.isEmpty) {
      const range = joinLineWithNext(selection.start.line, edit, document);
      if (range) {
        newSelections.push(new vscode.Selection(range.end, range.end));
      } else {
        newSelections.push(selection);
      }
    } else {
      for (
        let lineNum = selection.start.line;
        lineNum <= selection.end.line;
        lineNum++
      ) {
        joinLineWithNext(lineNum, edit, document);
      }
      newSelections.push(selection);
    }
  }
  textEditor.selections = newSelections;
}
