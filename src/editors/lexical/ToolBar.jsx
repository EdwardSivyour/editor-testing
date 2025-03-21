import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, UNDO_COMMAND, REDO_COMMAND } from "lexical";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const applyFormat = (format) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  return (
    <div className="control-group">
      <div className="button-group">
        <button onClick={() => applyFormat("bold")} aria-label="Bold">
          <FormatBoldIcon />
        </button>
        <button onClick={() => applyFormat("italic")} aria-label="Italic">
          <FormatItalicIcon />
        </button>
        <button onClick={() => applyFormat("strike")} aria-label="Strike">
          <FormatStrikethroughIcon />
        </button>
      </div>
      <div className="button-group">
        <button onClick={() => applyFormat("paragraph")} aria-label="Paragraph">
          P
        </button>
        <button onClick={() => applyFormat("heading1")} aria-label="Heading 1">
          H1
        </button>
        <button onClick={() => applyFormat("heading2")} aria-label="Heading 2">
          H2
        </button>
        <button onClick={() => applyFormat("heading3")} aria-label="Heading 3">
          H3
        </button>
        <button onClick={() => applyFormat("heading4")} aria-label="Heading 4">
          H4
        </button>
        <button onClick={() => applyFormat("heading5")} aria-label="Heading 5">
          H5
        </button>
        <button onClick={() => applyFormat("heading6")} aria-label="Heading 6">
          H6
        </button>
      </div>
      <div className="button-group">
        <button onClick={() => applyFormat("list")} aria-label="List">
          <FormatListBulletedIcon />
        </button>
        <button
          onClick={() => applyFormat("numbered-list")}
          aria-label="Numbered List"
        >
          <FormatListNumberedIcon />
        </button>
        <button
          onClick={() => applyFormat("blockquote")}
          aria-label="Blockquote"
        >
          <FormatQuoteIcon />
        </button>
        <button
          onClick={() => applyFormat("horizontal-rule")}
          aria-label="Horizontal Rule"
        >
          <HorizontalRuleIcon />
        </button>
      </div>
      <div className="button-group">
        <button
          onClick={() => editor.apply(UNDO_COMMAND)}
          aria-label="Undo"
        >
          <UndoIcon />
        </button>
        <button
          onClick={() => editor.dispatchCommand(REDO_COMMAND)}
          aria-label="Redo"
        >
          <RedoIcon />
        </button>
      </div>
    </div>
  );
};

export default ToolbarPlugin;
