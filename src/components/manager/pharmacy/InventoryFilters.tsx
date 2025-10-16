"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface InventoryFiltersProps {
  filterType: string;
  setFilterType: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function InventoryFilters({
  filterType,
  setFilterType,
  searchQuery,
  setSearchQuery,
}: InventoryFiltersProps) {
  return (
    <div className="flex justify-end gap-3 mb-6">
      <Select value={filterType} onValueChange={setFilterType}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter By Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Antibiotic">Antibiotic</SelectItem>
          <SelectItem value="Painkiller">Painkiller</SelectItem>
        </SelectContent>
      </Select>

      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="w-64"
      />
    </div>
  );
}
