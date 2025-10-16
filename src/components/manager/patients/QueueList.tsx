"use client";

import { useState, useMemo } from "react";
import QueueCard from "./QueueCard";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface Queue {
  name: string;
  id: string;
  description: string;
  serviceDate: string;
  imageUrl: string;
  assigned?: boolean;
}

interface QueueListProps {
  queues: Queue[];
}

export default function QueueList({ queues }: QueueListProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "assigned" | "unassigned">("all");

  const filteredQueues = useMemo(() => {
    return queues.filter((q) => {
      const matchesSearch =
        q.name.toLowerCase().includes(search.toLowerCase()) ||
        q.description.toLowerCase().includes(search.toLowerCase()) ||
        q.id.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" ||
        (filter === "assigned" && q.assigned) ||
        (filter === "unassigned" && !q.assigned);

      return matchesSearch && matchesFilter;
    });
  }, [queues, search, filter]);

  return (
    <div className="mt-4 space-y-4">
      {/* Filters */}
      <div className="flex justify-end gap-3 mb-4">
        <Select value={filter} onValueChange={(val) => setFilter(val as "all" | "assigned" | "unassigned")}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="assigned">Assigned</SelectItem>
            <SelectItem value="unassigned">Unassigned</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Search patients..."
          className="w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* List */}
      {filteredQueues.length === 0 ? (
        <p className="text-center text-muted-foreground mt-6">
          No patients found matching your criteria.
        </p>
      ) : (
        filteredQueues.map((q) => <QueueCard key={q.id} {...q} />)
      )}
    </div>
  );
}
