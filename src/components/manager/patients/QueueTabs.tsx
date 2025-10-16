"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

interface QueueTabsProps {
  unassignedContent: React.ReactNode;
  allContent: React.ReactNode;
  defaultTab?: "unassigned" | "all";
  onTabChange?: (tab: "unassigned" | "all") => void;
}

export default function QueueTabs({
  unassignedContent,
  allContent,
  defaultTab = "unassigned",
  onTabChange,
}: QueueTabsProps) {
  const [activeTab, setActiveTab] = useState<"unassigned" | "all">(defaultTab);

  const handleChange = (value: string) => {
    const tab = value as "unassigned" | "all";
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleChange}>
      <TabsList className="grid grid-cols-2 w-full max-w-md">
        <TabsTrigger value="unassigned">Unassigned</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
      </TabsList>
      <TabsContent value="unassigned">{unassignedContent}</TabsContent>
      <TabsContent value="all">{allContent}</TabsContent>
    </Tabs>
  );
}
