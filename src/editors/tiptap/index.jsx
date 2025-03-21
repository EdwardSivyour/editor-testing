import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from '@tiptap/extension-link'
import MenuBar from "./MenuBar";
import React, { useEffect, useContext } from "react";
import "./tiptapeditorstyles.css";
import Image from "@tiptap/extension-image";
import OfficePaste from "@intevation/tiptap-extension-office-paste";
import { ContentContext } from "../../App";

const extensions = [
  OfficePaste,
  StarterKit,
  Image,
  Link,
];

const TiptapEditor = ({defaultContent}) => {
  const { setTiptapContent } = useContext(ContentContext);

  const editor = useEditor({
    extensions: extensions,
    content: defaultContent,
  });

  useEffect(() => {
    if (editor) {
      editor.on('update', () => {
        setTiptapContent(editor.getHTML());
      });
    }
  }, [editor, setTiptapContent]);

  return (
    <>
      <div className="editor">
        <MenuBar editor={editor}/>
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default TiptapEditor;