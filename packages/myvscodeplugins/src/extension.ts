"use strict";

import * as vscode from "vscode";
import { transpose, splitIntoLines } from "./shortKey/Commands";
import { workspace } from "vscode";
import { VueProvier } from "./importVue/VueProvider";
import * as path from "path";
import * as fs from "fs";

// Activate
// ========

export function activate(context: any) {
  console.log("activete");

  const commandsTranspose = vscode.commands.registerTextEditorCommand(
    "shone.sing.lone.transpose",
    transpose
  );
  context.subscriptions.push(commandsTranspose);

  const commandsSplitIntoLines = vscode.commands.registerTextEditorCommand(
    "shone.sing.lone.splitIntoLines",
    splitIntoLines
  );
  context.subscriptions.push(commandsSplitIntoLines);

  try {
    console.log("workspace.rootPath", workspace.rootPath);
    let configs = fs.readFileSync(
      path.resolve(workspace.rootPath, "package.json"),
      "utf-8"
    );
    configs = JSON.parse(configs);
    if (configs.useImportVue) {
      const provierImportVue = vscode.languages.registerDefinitionProvider(
        [{ language: "vue", scheme: "file" }],
        new VueProvier(configs)
      );
      context.subscriptions.push(provierImportVue);
    }
  } catch (error) {}
}

/* 	const disposable3 = vscode.commands.registerTextEditorCommand('shone.sing.lone.expandToLine', expandToLine);
  context.subscriptions.push(disposable3);

  const disposable4 = vscode.commands.registerTextEditorCommand('shone.sing.lone.joinLines', joinLines);
  context.subscriptions.push(disposable4); */
