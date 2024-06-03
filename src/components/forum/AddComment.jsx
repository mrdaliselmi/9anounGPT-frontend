import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import Tiptap from './Tiptap';
import { Button } from '../ui/button';
import { usePostCommentMutation } from '@/app/state/forum/forumApiSlice';

export default function AddComment({ postId }) {
  const formSchema = z.object({
    comment: z
      .string()
      .min(27, {
        message: 'comment must be at least 20 characters.',
      })
      .max(500, {
        message: 'comment must be 140 characters or less.',
      })
      .trim(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  });
  const [postComment, { isSuccess, isLoading, isError }] =
    usePostCommentMutation();

  function onSubmit(values) {
    form.reset();
    const body = { content: values.comment };
    const id = parseInt(postId, 10);
    postComment({ id, body });
    window.location.reload(false);
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success('Event has been created.');
    }
    if (isError) {
      toast('error');
    }
  }, [isSuccess]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are the details of your answer?</FormLabel>
              <FormDescription className="text-xs pt-0">
                Introduce your answer and expand. Minimum 20 characters.
              </FormDescription>
              <FormControl>
                <Tiptap
                  onChange={field.onChange}
                  className="shadow-none border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Post Your Answer</Button>
      </form>
    </Form>
  );
}
