"use strict";

import {
  getCommandsSplitIntoLines,
  getCommandsTranspose,
  getCommandsQuoteIt,
  getCommandsQuoteItArray
} from "./shortKey/Commands/Commands.All";
/* import * as vscode from "vscode"; import { workspace } from "vscode"; import * as path from "path"; import * as fs from "fs"; */
export function activate(context: any) {
  context.subscriptions.push(getCommandsTranspose());
  context.subscriptions.push(getCommandsSplitIntoLines());
  context.subscriptions.push(getCommandsQuoteIt());
  context.subscriptions.push(getCommandsQuoteItArray());
}

/* 	const disposable3 = vscode.commands.registerTextEditorCommand('shone.sing.lone.expandToLine', expandToLine);
  context.subscriptions.push(disposable3);

  const disposable4 = vscode.commands.registerTextEditorCommand('shone.sing.lone.joinLines', joinLines);
  context.subscriptions.push(disposable4); */
