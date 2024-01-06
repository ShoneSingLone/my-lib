import * as vscode from "vscode";
import { transpose } from "./Commands.Transpose";
import { splitIntoLines } from "./Commands.SplitIntoLines";
import { quoteIt, quoteItArray } from "./Commands.QuoteIt";

// Commands
// ========

export function getCommandsTranspose() {
  return vscode.commands.registerTextEditorCommand(
    "shone.sing.lone.transpose",
    transpose
  );
}

export function getCommandsSplitIntoLines() {
  return vscode.commands.registerTextEditorCommand(
    "shone.sing.lone.splitIntoLines",
    splitIntoLines
  );
}
export function getCommandsQuoteIt() {
  return vscode.commands.registerTextEditorCommand(
    "shone.sing.lone.QuoteIt",
    quoteIt
  );
}
export function getCommandsQuoteItArray() {
  return vscode.commands.registerTextEditorCommand(
    "shone.sing.lone.QuoteIt.Array",
    quoteItArray
  );
}
