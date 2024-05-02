import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Toolbar from './Toolbar';
import { cn } from '@/utils/utils';

const extensions = [
  StarterKit.configure(),
  Heading.configure({
    HTMLAttributes: {
      class: 'text-lg font-semibold',
      levels: [2],
    },
  }),
  BulletList.configure({
    HTMLAttributes: {
      class: 'pl-4 list-disc',
    },
  }),
  OrderedList.configure({
    HTMLAttributes: {
      class: 'pl-4 list-decimal',
    },
  }),
];

const Tiptap = ({ body, className, onChange }) => {
  const editor = useEditor({
    extensions,
    content: body || '',
    editorProps: {
      attributes: {
        class: cn(
          'rounded-md min-h-[100px] shadow-none border-gray-600 border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        ),
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      // console.log(editor.getHTML());
    },
  });

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
