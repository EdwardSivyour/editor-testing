import React, { useEffect, useContext } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import ToolbarPlugin from "./ToolBar";
import { $getRoot } from "lexical";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import "./lexical.css";

import { ContentContext } from "../../App";

const LexicalEditor = ({ defaultContent }) => {
  const { setLexicalContent } = useContext(ContentContext);

  const initialConfig = {
    namespace: "MyEditor",
    theme: {
      // Define custom styles for the editor
      paragraph: "editor-paragraph",
    },
    onError: (error) => {
      console.error("Lexical Error:", error);
    },
    editorState: (editor) => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(defaultContent, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      const root = $getRoot();
      root.append(...nodes);
    },
  };

  const handleChange = (editorState, editor) => {
    editorState.read(() => {
      const html = $generateHtmlFromNodes(editor, null); // Pass the editor instance to generate HTML
      setLexicalContent(html);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="editor editor-input"
              placeholder="Start typing here..."
            />
          }
        />
        <OnChangePlugin onChange={(editorState, editor) => handleChange(editorState, editor)} />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  );
};

export default LexicalEditor;
