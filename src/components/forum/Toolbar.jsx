import {
  IconBold,
  IconH1,
  IconItalic,
  IconList,
  IconListNumbers,
  IconStrikethrough,
} from '@tabler/icons-react';
import { Toggle } from '../ui/toggle';

export default function Toolbar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex space-x-2 rounded-md shadow-none border-gray-600 border bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      <Toggle
        size="sm"
        pressed={editor.isActive('heading')}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <IconH1 className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <IconBold className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <IconItalic className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <IconStrikethrough className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <IconList className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <IconListNumbers className="h-5 w-5" />
      </Toggle>
    </div>
  );
}
