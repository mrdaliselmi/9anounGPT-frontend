import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';

function NavigationBar() {
  return (
    <Tabs defaultValue="1" className="w-[400px] p-2 gap-2  ">
      <TabsList className="grid w-full grid-cols-3 bg-white">
        <TabsTrigger value="1" className="data-[state=active]:bg-zinc-100">
          model 1
        </TabsTrigger>
        <TabsTrigger value="2" className="data-[state=active]:bg-zinc-100">
          model 2
        </TabsTrigger>
        <TabsTrigger value="3" className="data-[state=active]:bg-zinc-100">
          model 3
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default NavigationBar;
