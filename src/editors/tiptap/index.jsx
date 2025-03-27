import { EditorContent, useEditor } from "@tiptap/react";

import MenuBar from "./MenuBar";
import React, { useEffect, useContext } from "react";
import "./tiptapeditorstyles.scss";

import StarterKit from "@tiptap/starter-kit"; 
/* Includes the following extensions:
  - [NODES]:
    - Blockquote, 
    - BulletList, 
    - CodeBlock, 
    - Document, 
    - HardBreak, 
    - Heading, 
    - HorizontalRule, 
    - ListItem, 
    - OrderedList, 
    - Paragraph, 
    - Text,
  - [MARKS]: 
    - Bold, 
    - Code, 
    - Italic, 
    - Strike 
*/
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from "@tiptap/extension-image";
// Advanced extensions
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'

import OfficePaste from "@intevation/tiptap-extension-office-paste";

import { ContentContext } from "../../App";

const extensions = [
  StarterKit,
  Link,
  Image,
  OfficePaste,
  Underline,
  Table.configure({
    resizable: true,
  }),
  TableCell,
  TableHeader,
  TableRow,
  Subscript,
  Superscript,
];

const TiptapEditor = ({defaultContent}) => {
  const { setTiptapContent } = useContext(ContentContext);

  const editor = useEditor({
    extensions: extensions,
    content: defaultContent,
    onUpdate: ({ editor }) => {
      setTiptapContent(editor.getHTML());
    },

    history: true,
  });

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