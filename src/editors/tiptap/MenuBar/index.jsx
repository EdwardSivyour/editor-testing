import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

// table icons

import SuperscriptIcon from "@mui/icons-material/Superscript";
import SubScriptIcon from "@mui/icons-material/Subscript";

import React from "react";

const MenuBar = ({ editor }) => {
  return (
    <>
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FormatBoldIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FormatItalicIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FormatStrikethroughIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editor.can().chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
          >
            <FormatUnderlinedIcon />
          </button>
        </div>
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            P
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            H2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            H3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }
          >
            H4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }
          >
            H5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }
          >
            H6
          </button>
        </div>
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <FormatListBulletedIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <FormatListNumberedIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <FormatQuoteIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <HorizontalRuleIcon />
          </button>
        </div>
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <UndoIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <RedoIcon />
          </button>
        </div>
      </div>
      {/* Advanced Features */}
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            disabled={!editor.can().chain().focus().toggleSubscript().run()}
            className={editor.isActive("subscript") ? "is-active" : ""}
          >
            <SubScriptIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            disabled={!editor.can().chain().focus().toggleSuperscript().run()}
            className={editor.isActive("superscript") ? "is-active" : ""}
          >
            <SuperscriptIcon />
          </button>
        </div>
        {/* tables */}
        <div className="button-group">
          <button
            onClick={() =>
              editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run()
            }
          >
            Add Table
          </button>
          <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
            Add Column
          </button>
          <button onClick={() => editor.chain().focus().addRowAfter().run()}>
            Add Row
          </button>
          <button onClick={() => editor.chain().focus().deleteColumn().run()}>
            Delete Column
          </button>
          <button onClick={() => editor.chain().focus().deleteRow().run()}>
            Delete Row
          </button>
          <button onClick={() => editor.chain().focus().deleteTable().run()}>
            Delete Table
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
