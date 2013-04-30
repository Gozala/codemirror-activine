"use strict";

var activeLine = "line@activine"

function onCursorActivity(editor) {
  var line = editor.getLineHandle(editor.getCursor().line)
  var active = editor[activeLine]
  if (line != active) {
    editor.removeLineClass(active, "background", "activeline")
    editor[activeLine] = editor.addLineClass(line, "background", "activeline")
  }
}

function setup(editor, value) {
  /**
  Takes editor and enables persists changes to the buffer across the sessions.
  **/
  if (value) {
    editor[activeLine] = editor.addLineClass(0, "background", "activeline")
    editor.on("cursorActivity", onCursorActivity)
    onCursorActivity(editor)
  } else {
    editor.removeLineClass(editor[activeLine], "background", "activeline")
    delete editor[activeLine]
    editor.off("cursorActivity", onCursorActivity)
  }
}

function plugin(CodeMirror) {
  CodeMirror.defineOption("activeLine", false, setup)
}

module.exports = plugin
