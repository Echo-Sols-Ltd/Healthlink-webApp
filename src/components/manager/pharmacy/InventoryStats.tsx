"use client";

import Card from "@/components/doctor/Card";

/**
 * @description Static inventory statistics data
 * @todo Replace with dynamic data from API
 */
const stats = [
  { label: "In Stock", value: 12 },
  { label: "Pending", value: 12 },
  { label: "Low stock items", value: 12 },
  { label: "Collected", value: 12 },
];

/**
 * InventoryStats Component
 * @returns {JSX.Element} Grid of inventory statistics
 * @performance Memoize if stats become dynamic
 */
export default function InventoryStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, i) => (
        <Card key={i} title={stat.label} total={stat.value} />
      ))}
    </div>
  );
}
