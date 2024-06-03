/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import Tag from '@/components/forum/Tag.jsx';

const Typewriter = ({ markdownText }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const tagRegex = /#([\w\u00C0-\u017F]+)/g;

  const splitText = markdownText.split(tagRegex);
  const tempTags = splitText.slice(-4);
  const tags = tempTags.filter((tag) => tag.trim() !== '' && tag !== '\n\n\n');
  tags?.forEach((tag, index) => {
    if (tag && tags.length > 1) {
      tag = `#${tag}`;
      const neew = markdownText.split(tag);
      console.log('new', neew);
      markdownText = markdownText.split(tag).join('');
      console.log('md', markdownText);
    }
  });
  console.log('tags', tags);

  const parsedMarkdown = marked(markdownText);

  useEffect(() => {
    if (index < parsedMarkdown.length) {
      console.log('parsedMarkdown', parsedMarkdown);
      console.log('typewrite', parsedMarkdown.split(' '));
      const timeoutId = setTimeout(() => {
        setDisplayedText(parsedMarkdown.slice(0, index + 1));
        setIndex(index + 1);
      }, 10);

      return () => clearTimeout(timeoutId);
    }
  }, [index, parsedMarkdown]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: displayedText }} />
      <div className="flex flex-row p-2">
        {tags.slice(0, 2).map((tag, index) => {
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
