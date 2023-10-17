import * as vscode from "vscode";
import { getNext, getPrev, joinLineWithNext } from "./helperFunctions";

// Commands
// ========

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
    transposeCharacters(textEditor, edit);
  } else {
    transposeSelections(textEditor, edit);
  }
}

export function splitIntoLines(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) {
  let newSelections: vscode.Selection[] = [];
  for (let selection of textEditor.selections) {
    if (selection.isSingleLine) {
      newSelections.push(selection);
      continue;
    }
    let line = textEditor.document.lineAt(selection.start);
    newSelections.push(new vscode.Selection(selection.start, line.range.end));
    for (
      let lineNum = selection.start.line + 1;
      lineNum < selection.end.line;
      lineNum++
    ) {
      line = textEditor.document.lineAt(lineNum);
      newSelections.push(
        new vscode.Selection(line.range.start, line.range.end)
      );
    }
    if (selection.end.character > 0) {
      newSelections.push(
        new vscode.Selection(selection.end.with(undefined, 0), selection.end)
      );
    }
  }
  textEditor.selections = newSelections;
}

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
