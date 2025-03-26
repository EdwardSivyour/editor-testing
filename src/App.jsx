import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import TipTapEditor from "./editors/tiptap";
import QuillEditor from "./editors/quill";
import LexicalEditor from "./editors/lexical";
import CommentsModal from "./components/CommentsModal";
import PreviewModal from "./components/PreviewModal";

import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import TipTapComments from "./content/tiptapComments.md?raw";
import QuillComments from "./content/quillComments.md?raw";
import LexicalComments from "./content/lexicalComments.md?raw";
import { BorderRight } from "@mui/icons-material";

const defaultContent = `
 <h1>This is a heading</h1>
  <p>This is a paragraph</p>
  <p><strong>This is bold text</strong></p>
  <p><em>This is italic text</em></p>
  <p><s>This is strikethrough text</s></p>
  <p><u>This is underlined text</u></p>
  <p><a href="https://www.google.com">This is a link</a></p>
  <img src="https://picsum.photos/200" />
  <p>This is a list:</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <p>This is a numbered list:</p>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
`;

export const ContentContext = createContext();

function App() {
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const [comments, setComments] = useState("");
  const [preview, setPreview] = useState("");

  const [tiptapContent, setTiptapContent] = useState(defaultContent);
  const [quillContent, setQuillContent] = useState(defaultContent);
  const [lexicalContent, setLexicalContent] = useState(defaultContent);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };


  const handleOpenCommentsModal = (comments) => {
    switch (comments) {
      case "tiptap":
        setComments(TipTapComments);
        setShowCommentsModal(true);
        break;
      case "quill":
        setComments(QuillComments);
        setShowCommentsModal(true);
        break;
      case "lexical":
        setComments(LexicalComments);
        setShowCommentsModal(true);
        break;
      default:
        setShowCommentsModal(false);
        break;
    }
  };

  const handlePreviewModal = (comments) => {
    switch (comments) {
      case "tiptap":
        setPreview(tiptapContent);
        setShowPreviewModal(true);
        break;
      case "quill":
        setPreview(quillContent);
        setShowPreviewModal(true);
        break;
      case "lexical":
        setPreview(lexicalContent);
        setShowPreviewModal(true);
        break;
      default:
        setPreview("");
        setShowPreviewModal(false);
        break;
    }
  };

  return (
    <div>
      <h1>Editor Testing</h1>
      <button className="floating-button" onClick={toggleTheme}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
      <div>
        <p>Demos and breakdowns for different editors.</p>
      </div>
      <hr />
      <ContentContext.Provider
        value={{ setTiptapContent, setQuillContent, setLexicalContent }}
      >
        {/* TipTap Editor */}
        <div className="header">
          <h2>TipTap Editor Example</h2>
          <div className="button-group">
            <button onClick={() => handleOpenCommentsModal("tiptap")}>
              <SpeakerNotesIcon style={{ marginRight: "4px" }} /> Show Comments
            </button>
            <button onClick={() => handlePreviewModal("tiptap")}>
              <VisibilityIcon style={{ marginRight: "4px" }} /> Preview
            </button>
          </div>
        </div>
        <TipTapEditor defaultContent={defaultContent} />
        <hr />

        {/* Lexical Editor */}
        <div className="header">
          <h2>Lexical Editor Example</h2>
          <div className="button-group">
            <button onClick={() => handleOpenCommentsModal("lexical")}>
              <SpeakerNotesIcon style={{ marginRight: "4px" }} /> Show Comments
            </button>
            <button onClick={() => handlePreviewModal("lexical")}>
              <VisibilityIcon style={{ marginRight: "4px" }} /> Preview
            </button>
          </div>
        </div>
        <LexicalEditor defaultContent={defaultContent} />
        <hr />

        {/* Quill Editor */}
        <div className="header">
          <h2>Quill Editor Example</h2>
          <div className="button-group">
            <button onClick={() => handleOpenCommentsModal("quill")}>
              <SpeakerNotesIcon style={{ marginRight: "4px" }} /> Show Comments
            </button>
            <button onClick={() => handlePreviewModal("quill")}>
              <VisibilityIcon style={{ marginRight: "4px" }} /> Preview
            </button>
          </div>
        </div>
        <QuillEditor defaultContent={defaultContent} />
        <hr />

        {showCommentsModal && (
          <CommentsModal
            handleClose={() => setShowCommentsModal(false)}
            comments={comments}
          />
        )}
        {showPreviewModal && (
          <PreviewModal
            handleClose={() => setShowPreviewModal(false)}
            htmlContent={preview}
          />
        )}
      </ContentContext.Provider>
    </div>
  );
}

export default App;
