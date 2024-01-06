"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuoteHtmlCommand {
    constructor(view) {
        this.view = view;
    }
    run(edit, action = 'single') {
        const selection = this.view.selections[0];
        if (selection.isEmpty) {
            const region = new vscode.Range(0, this.view.document.lineAt(0).range.end.character, this.view.document.lineAt(this.view.document.lineCount - 1).range.end.character, this.view.document.lineAt(this.view.document.lineCount - 1).range.end.character);
            const code = this.view.document.getText(region);
            code = this.quote(code, action);
            this.view.edit(edit, { replace: region, newText: code });
        }
        else {
            for (const sel of this.view.selections) {
                const region = new vscode.Range(this.view.document.lineAt(sel.startLineNumber).rangeInCharacterOffset(sel), this.view.document.lineAt(sel.endLineNumber - 1).rangeInCharacterOffset(sel));
                const code = this.view.document.getText(region);
                code = this.quote(code, action);
                this.view.edit(edit, { replace: region, newText: code });
            }
        }
    }
}
//# sourceMappingURL=Commands.QuoteIt%20copy.js.map