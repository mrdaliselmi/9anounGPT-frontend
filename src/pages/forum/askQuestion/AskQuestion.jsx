import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Tiptap from '@/components/forum/Tiptap';

export default function AskQuestion() {
  const formSchema = z.object({
    title: z.string().min(15, {
      message: 'Title must be at least 15 characters.',
    }),
    body: z
      .string()
      .min(27, {
        message: 'Question body must be at least 20 characters.',
      })
      .max(140, {
        message: 'Question body must be at 140 characters or less.',
      })
      .trim(),
    tags: z
      .string()
      .transform((val) => val.split(/\s+/).filter(Boolean)) // Split by whitespace and remove empty strings
      .refine((value) => value.length <= 5, {
        message: 'Tags cannot contain more than 5 words.',
        path: ['tags'],
      })
      .refine((value) => value.every((tag) => /^[a-zA-Z0-9]+$/.test(tag)), {
        message: 'Tags can only contain alphanumeric characters.',
        path: ['tags'],
      }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      body: '',
      tags: '',
    },
  });

  function onSubmit(values) {
    // console.log(values);
  }
  return (
    <div>
      <div className="grid gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormDescription className="text-xs pt-0">
                    Be specific and imagine you’re asking a question to another
                    person.
                  </FormDescription>
                  <FormControl>
                    <Input
                      className="shadow-none border-gray-600"
                      placeholder="eg. Am I eligible to have a driver's license in Tunisia?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are the details of your question?</FormLabel>
                  <FormDescription className="text-xs pt-0">
                    Introduce the problem and expand on what you put in the
                    title. Minimum 20 characters.
                  </FormDescription>
                  <FormControl>
                    <Tiptap
                      onChange={field.onChange}
                      className="shadow-none border-gray-600"
                      placeholder="eg. Am I eligible to have a driver's license in Tunisia?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormDescription className="text-xs pt-0">
                    Add up to 5 tags to describe what your question is about.
                    Start typing to see suggestions.
                  </FormDescription>
                  <FormControl>
                    <Input
                      className="shadow-none border-gray-600"
                      placeholder="eg. Am I eligible to have a driver's license in Tunisia?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="pb-10">
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </div>
  );
}
