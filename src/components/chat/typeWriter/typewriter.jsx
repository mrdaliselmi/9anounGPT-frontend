/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

const Typewriter = ({ markdownText }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const parsedMarkdown = marked(markdownText);

  useEffect(() => {
    if (index < parsedMarkdown.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(parsedMarkdown.slice(0, index + 1));
        setIndex(index + 1);
      }, 10);

      return () => clearTimeout(timeoutId);
    }
  }, [index, parsedMarkdown]);

  return <div dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default Typewriter;
