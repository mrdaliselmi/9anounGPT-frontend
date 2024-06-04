/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
import React, { useEffect, useRef, useState } from 'react';
import { marked } from 'marked';
import Tag from '@/components/forum/Tag.jsx';
import { useWebSocket } from '@/context/webSocketContext.jsx';

const Typewriter = ({ isUser, markdownText }) => {
  const { fetched } = useWebSocket();
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const tagRegex = /#([\w\u00C0-\u017F]+)/g;
  const tagsRef = useRef(null);
  const splitText = markdownText.split(tagRegex);
  const tempTags = splitText.slice(-4);
  const tags = tempTags.filter((tag) => tag.trim() !== '' && tag !== '\n\n\n');
  tags?.forEach((tag) => {
    if (tag && tags.length > 1) {
      tag = `#${tag}`;
      markdownText = markdownText.split(tag).join('');
    }
  });

  const parsedMarkdown = marked(markdownText);

  useEffect(() => {
    if (isUser || fetched) {
      setDisplayedText(parsedMarkdown);
    }
    if (!isUser && fetched) {
      if (tagsRef.current && tagsRef.current.innerHTML !== '') {
        tagsRef.current.className = tagsRef.current.className.replace(
          'hidden',
          '',
        );
      }
    }
    if (!isUser && !fetched) {
      if (index < parsedMarkdown.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(parsedMarkdown.slice(0, index + 1));
          setIndex(index + 1);
        }, 10);

        return () => clearTimeout(timeoutId);
      }
      if (index === parsedMarkdown.length) {
        setTimeout(() => {
          if (tagsRef.current) {
            tagsRef.current.className = tagsRef.current.className.replace(
              'hidden',
              '',
            );
          }
        }, 10);
      }
    }
  }, [index, parsedMarkdown]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: displayedText }} />
      <div ref={tagsRef} className="hidden flex flex-row p-2">
        {tags.slice(0, 2).map((tag) => {
          if (tags.length > 1) {
            // eslint-disable-next-line react/jsx-key
            return <Tag className="w-auto p-2 m-2" name={tag} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Typewriter;
