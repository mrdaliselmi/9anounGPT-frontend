import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { cn } from '@/utils';
import { Input } from '@/components/ui/input';
import TopTags from './topTags/TopTags';

export default function TagsView() {
  const [selectedOption, setSelectedOption] = useState('Popular');
  return (
    <div>
      <div className=" p-6 flex flex-col">
        <div className="text-2xl flex font-semibold">Tags</div>
        <p className="text-start pt-4 text-sm w-2/3">
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>
      </div>
      <div>
        <Tabs defaultValue="Popular" className="w-auto">
          <div className="flex flex-row">
            <div className="flex flex-grow" />
            <TabsList className="flex flex-row-reverse border-b w-auto border-gray-200">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="me-2">
                  <TabsTrigger
                    className={cn(
                      'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-700 dark:hover:text-gray-300 group',
                      selectedOption === 'Popular' &&
                        'border-gray-700 text-gray-700',
                    )}
                    value="Popular"
                    onClick={() => {
                      setSelectedOption('Popular');
                    }}
                  >
                    Popular
                  </TabsTrigger>
                </li>
                <li className="me-2">
                  <TabsTrigger
                    className={cn(
                      'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-700 dark:hover:text-gray-300 group',
                      selectedOption === 'Name' &&
                        'border-gray-700 text-gray-700',
                    )}
                    value="Name"
                    onClick={() => {
                      setSelectedOption('Name');
                    }}
                  >
                    Name
                  </TabsTrigger>
                </li>
                <li className="me-2">
                  <TabsTrigger
                    className={cn(
                      'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-700 dark:hover:text-gray-300 group',
                      selectedOption === 'New' &&
                        'border-gray-700 text-gray-700',
                    )}
                    value="New"
                    onClick={() => {
                      setSelectedOption('New');
                    }}
                  >
                    New
                  </TabsTrigger>
                </li>
              </ul>
            </TabsList>
          </div>
          <TabsContent value="Popular">
            <TopTags option={selectedOption} />
          </TabsContent>
          <TabsContent value="Name">
            <TopTags option={selectedOption} />
          </TabsContent>
          <TabsContent value="New">
            <TopTags option={selectedOption} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
