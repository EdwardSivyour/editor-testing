import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Modal from './Modal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CommentsModal({ handleClose, comments }) {

  return (
    <Modal handleClose={handleClose}>
      <ReactMarkdown
          components={{
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={dracula}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}
        >
          {comments}
        </ReactMarkdown>
    </Modal>
  );
}