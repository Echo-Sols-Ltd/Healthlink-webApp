"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface FiltersBarProps {
  filterLabel: string;
  filterOptions: { value: string; label: string }[];
  searchPlaceholder: string;
  filterValue: string;
  setFilterValue: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function FiltersBar({
  filterLabel,
  filterOptions,
  searchPlaceholder,
  filterValue,
  setFilterValue,
  searchQuery,
  setSearchQuery,
}: FiltersBarProps) {
  return (
    <div className="flex justify-end gap-3 mb-6">
      <Select value={filterValue} onValueChange={setFilterValue}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder={filterLabel} />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={searchPlaceholder}
        className="w-64"
      />
    </div>
  );
}
