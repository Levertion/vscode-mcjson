'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let config = vscode.workspace.getConfiguration()
    if (config.get("files.associations")["*.mcmeta"] == undefined && !context.globalState.get("mcmeta-updated")) {
        let object = typeof config.inspect("files.associations").globalValue == "object" ? config.inspect("files.associations").globalValue : {};
        object["*.mcmeta"] = "json";
        config.update("files.associations", object, true);
        vscode.window.showInformationMessage("In order for the vscode-mcjson extension to support mcmeta files, it has had to update the `files.association` setting in user settings to make mcmeta files use JSON");
    }
    context.globalState.update("mcmeta-updated", true);
}

// this method is called when your extension is deactivated
export function deactivate() {
}