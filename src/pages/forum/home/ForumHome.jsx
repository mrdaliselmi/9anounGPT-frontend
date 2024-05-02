import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/utils/utils';
import AskQuestion from '../askQuestion/AskQuestion';
import TopsQuestions from '@/components/forum/TopsQuestions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ForumHome() {
  const [selectedOption, setSelectedOption] = useState('Hot');
  return (
    <div>
      <div className="p-6 text-left flex flex-row">
        <div className="text-2xl flex font-semibold">Top Questions</div>
        <div className="flex flex-grow" />
        <div className="flex">
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
                              Describe your problem in more detail. Describe
                              what you
                            </li>
                            <li>
                              tried and what you expected to happen. Add “tags”
                              which
                            </li>
                            <li>
                              help surface your question to members of the
                              community.
                            </li>
                            <li>
                              Review your question and post it to the site.
                            </li>
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
        </div>
      </div>
      <div>
        <Tabs defaultValue="Hot" className="w-auto">
          <div className="flex flex-row">
            <div className="flex flex-grow" />
            <TabsList className="flex flex-row-reverse border-b w-auto border-gray-200">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="me-2">
                  <TabsTrigger
                    className={cn(
                      'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-700 dark:hover:text-gray-300 group',
                      selectedOption === 'Hot' &&
                        'border-gray-700 text-gray-700',
                    )}
                    value="Hot"
                    onClick={() => {
                      setSelectedOption('Hot');
                    }}
                  >
                    Hot
                  </TabsTrigger>
                </li>
                <li className="me-2">
                  <TabsTrigger
                    className={cn(
                      'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-700 dark:hover:text-gray-300 group',
                      selectedOption === 'Week' &&
                        'border-gray-700 text-gray-700',
                    )}
                    value="Week"
                    onClick={() => {
                      setSelectedOption('Week');
                    }}
                  >
                    Week
                  </TabsTrigger>
                </li>
                <li className="me-2">
                  <TabsTrigger
                    className={cn(
                      'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-700 dark:hover:text-gray-300 group',
                      selectedOption === 'Month' &&
                        'border-gray-700 text-gray-700',
                    )}
                    value="Month"
                    onClick={() => {
                      setSelectedOption('Month');
                    }}
                  >
                    Month
                  </TabsTrigger>
                </li>
                <li className="me-2">
                  <TabsTrigger
                    className={cn(
                      'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-700 dark:hover:text-gray-300 group',
                      selectedOption === 'Controversial' &&
                        'border-gray-700 text-gray-700',
                    )}
                    value="Controversial"
                    onClick={() => {
                      setSelectedOption('Controversial');
                    }}
                  >
                    Controversial
                  </TabsTrigger>
                </li>
              </ul>
            </TabsList>
          </div>
          <TabsContent value="Hot">
            <TopsQuestions option={selectedOption} />
          </TabsContent>
          <TabsContent value="Week">
            <TopsQuestions option={selectedOption} />
          </TabsContent>
          <TabsContent value="Month">
            <TopsQuestions option={selectedOption} />
          </TabsContent>
          <TabsContent value="Controversial">
            <TopsQuestions option={selectedOption} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
