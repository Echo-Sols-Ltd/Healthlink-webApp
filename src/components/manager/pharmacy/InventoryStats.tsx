"use client";

import Card from "@/components/doctor/Card";

const stats = [
  { label: "In Stock", value: 12 },
  { label: "Pending", value: 12 },
  { label: "Low stock items", value: 12 },
  { label: "Collected", value: 12 },
];

export default function InventoryStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, i) => (
        <Card key={i} title={stat.label} total={stat.value} />
      ))}
    </div>
  );
}
