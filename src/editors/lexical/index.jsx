import React, { useEffect, useContext } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import ToolbarPlugin from "./ToolBar";
import { $getRoot } from "lexical";
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
  };

  const handleChange = (editorState) => {
    editorState.read(() => {
      // Do stuff here
    });
  };

  useEffect(() => {
    const editor = initialConfig.editor;
    if (editor) {
      editor.update(() => {
        const root = $getRoot();
        root.setHTML(defaultContent);
      });
    }
  }, [defaultContent]);

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor editor-input" placeholder="Start typing here..." />}
        />
        <OnChangePlugin onChange={handleChange} />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  );
};

export default LexicalEditor;
