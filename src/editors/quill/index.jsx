import React, { useEffect, useRef, useContext } from 'react';
import Quill from 'quill';
// import './quill.smoke.css';
// import 'quill/dist/quill.snow.css';
import { ContentContext } from '../../App';

const QuillEditor = ({ defaultContent }) => {
  // Dynamically import Quill CSS based on theme set in localStorage
   useEffect(() => {
     const theme = localStorage.getItem('theme') || 'dark';
     if (theme === 'dark') {
       import('./quill.smoke.css');
     } else {
       import('quill/dist/quill.snow.css');
     }
   }, []);

  const { setQuillContent } = useContext(ContentContext);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !editorRef.current.__quill) {
      // Initialize Quill editor
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
          ],
        },
        formats: ['header', 'bold', 'italic', 'underline', 'list', 'link', 'code-block', 'image'],
      });

      // Attach Quill instance to prevent re-initialization
      editorRef.current.__quill = quill;

      // Set default content
      quill.root.innerHTML = defaultContent;

      // Listen for text changes and update context
      quill.on('text-change', () => {
        setQuillContent(quill.root.innerHTML);
      });

      // Cleanup on component unmount
      return () => {
        quill.off('text-change');
      };
    }
  }, [defaultContent, setQuillContent]);

  return <div ref={editorRef} />;
};

export default QuillEditor;