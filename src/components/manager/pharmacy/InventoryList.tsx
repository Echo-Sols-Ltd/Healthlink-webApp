"use client";

import InventoryCard from "./InventoryCard";

interface InventoryListProps {
  items: {
    name: string;
    type: string;
    stock: string;
    supplier: string;
    status: string;
    lastRestocked: string;
  }[];
}

export default function InventoryList({ items }: InventoryListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.length > 0 ? (
        items.map((item, i) => <InventoryCard key={i} {...item} />)
      ) : (
        <p className="col-span-full text-center text-muted-foreground">
          No medications found.
        </p>
      )}
    </div>
  );
}
