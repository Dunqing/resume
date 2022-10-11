// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { renderToString } from 'react-dom/server'
import { Resume } from '@resumejs/components'
import { createElement } from 'react'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vscode" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'vscode.previewResumeSide',
    async () => {
      const resource = vscode.window.activeTextEditor?.document.uri
      if (!resource) return

      const text = await (
        await vscode.workspace.openTextDocument(resource)
      ).getText()

      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      const html = renderToString(
        createElement(Resume, {
          children: text,
        })
      )

      const panel = vscode.window.createWebviewPanel(
        'resume',
        'Preview Resume',
        vscode.ViewColumn.Beside,
        {}
      )

      panel.webview.html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cat Coding</title>
          <style>
          </style>
      </head>
      <body>
        ${html}
      </body>
      </html>`
    }
  )

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
export function deactivate() {}
