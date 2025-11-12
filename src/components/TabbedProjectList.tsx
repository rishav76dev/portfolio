"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCardList from "@/app/projects/components/ProjectCardList";
import AddOnProjects from "@/components/AddOnProjects";
// import MobileApps from '@/components/MobileApps';

const TabbedProjectList = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="web" className="w-full">
        <div className="flex justify-center mb-8 max-sm:mb-4 max-sm:px-2">
          <TabsList className="w-full max-w-xl bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-1">
            <TabsTrigger
              value="web"
              className="text-xs sm:text-sm data-[state=active]:bg-white/20"
            >
              Web Dev
            </TabsTrigger>
            <TabsTrigger
              value="web3"
              className="text-xs sm:text-sm data-[state=active]:bg-white/20"
            >
              Solana Smart Contract
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="web" className="mt-0">
          <ProjectCardList />
        </TabsContent>

        {/* <TabsContent value="mobile" className="mt-0">
                    <MobileApps />
                </TabsContent> */}

        <TabsContent value="web3" className="mt-0">
          <AddOnProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabbedProjectList;
