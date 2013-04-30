# codemirror-activine

Simple code-mirror plugin for highlighting active line.

## Usage

```js
// require plugin
var activine = require("codemirror-activine")

// Install plugin
activine(CodeMirror)

var myCodeMirror = CodeMirror(document.body, {
  // ...
  activeLine: true // enable active line highlighting
})
```

## Install

    npm install codemirror-activine
