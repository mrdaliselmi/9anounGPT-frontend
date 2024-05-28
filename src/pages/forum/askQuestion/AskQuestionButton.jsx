import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import AskQuestion from './AskQuestion';

export default function AskQuestionButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Ask a Question</Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden max-h-[calc(100vh-20px)]">
        <ScrollArea className="max-h-[calc(100vh-20px)] w-full mr-[-10px]">
          <DialogHeader>
            <DialogTitle>Ask a Question</DialogTitle>
            <DialogDescription>
              <Accordion type="single" collapsible>
                <AccordionItem className="border-none" value="item-1">
                  <AccordionTrigger>
                    How to write a good question?
                  </AccordionTrigger>
                  <AccordionContent>
                    Steps
                    <ol className="list-disc list-inside">
                      <li>Summarize your problem in a one-line title.</li>
                      <li>
                        Describe your problem in more detail. Describe what you
                      </li>
                      <li>
                        tried and what you expected to happen. Add “tags” which
                      </li>
                      <li>
                        help surface your question to members of the community.
                      </li>
                      <li>Review your question and post it to the site.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </DialogDescription>
            <AskQuestion />
          </DialogHeader>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
