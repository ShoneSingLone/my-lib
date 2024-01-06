"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const Commands_All_1 = require("./shortKey/Commands/Commands.All");
/* import * as vscode from "vscode"; import { workspace } from "vscode"; import * as path from "path"; import * as fs from "fs"; */
function activate(context) {
    context.subscriptions.push((0, Commands_All_1.getCommandsTranspose)());
    context.subscriptions.push((0, Commands_All_1.getCommandsSplitIntoLines)());
    context.subscriptions.push((0, Commands_All_1.getCommandsQuoteIt)());
    context.subscriptions.push((0, Commands_All_1.getCommandsQuoteItArray)());
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map