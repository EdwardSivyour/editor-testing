import React, { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { html as beautifyHtml } from 'js-beautify';

import Modal from './Modal';

export default function PreviewModal({ handleClose, htmlContent }) {

  const beautifiedHtml = beautifyHtml(htmlContent, {
    indent_size: 2,
    wrap_line_length: 80,
    end_with_newline: true,
    preserve_newlines: true,
    keep_array_indentation: true,
    break_chained_methods: true,
    indent_scripts: 'normal',
    brace_style: 'collapse,preserve-inline',
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    wrap_attributes: 'auto',
    wrap_attributes_indent_size: 2,
  });

  return (
    <Modal handleClose={handleClose} fullScreen={true}>
      <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', padding: '10px', borderRight: '1px solid #ccc', }}>
        <pre>
          <SyntaxHighlighter language="html" style={dracula}>
            {beautifiedHtml}
          </SyntaxHighlighter>
        </pre>
      </div>
      <div style={{ width: '50%', padding: '10px' }} dangerouslySetInnerHTML={{__html: htmlContent}} />
      </div>
    </Modal>
  );
}