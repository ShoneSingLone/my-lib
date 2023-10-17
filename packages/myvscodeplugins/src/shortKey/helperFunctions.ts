//@ts-nocheck
import * as vscode from "vscode";

// helperFunctions
// ================

export function getNext(
  position: vscode.Position,
  document: vscode.TextDocument
) {
  const endOfLine = document.lineAt(position.line).range.end.character;
  if (position.character != endOfLine) {
    return new vscode.Position(position.line, position.character + 1);
  }
  if (position.line == document.lineCount - 1) {
    return null;
  }
  return new vscode.Position(position.line + 1, 0);
}

export function getPrev(
  position: vscode.Position,
  document: vscode.TextDocument
) {
  if (position.character != 0) {
    return new vscode.Position(position.line, position.character - 1);
  }
  if (position.line == 0) {
    return null;
  }
  const endOfPrevLine = document.lineAt(position.line - 1).range.end.character;
  return new vscode.Position(position.line - 1, endOfPrevLine);
}

/** Returns the range deleted, if successful */
export function joinLineWithNext(
  line: number,
  edit: vscode.TextEditorEdit,
  document: vscode.TextDocument
) {
  if (line >= document.lineCount - 1) return null;
  const matchWhitespaceAtEnd = document.lineAt(line).text.match(/\s*$/) || [];
  const range = new vscode.Range(
    //@ts-ignore
    line,
    document.lineAt(line).range.end.character -
      matchWhitespaceAtEnd?.[0].length,
    line + 1,
    document.lineAt(line + 1).firstNonWhitespaceCharacterIndex
  );
  edit.replace(range, " ");
  return range;
}
