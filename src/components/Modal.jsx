import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal({ handleClose, fullScreen, children }) {

  // handle escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="modal">
      <button className="floating-button" onClick={handleClose}>
        <CloseIcon />
      </button>
      <div className={`${fullScreen && 'fullscreen'} modal-content`}>{children}</div>
    </div>
  );
}
