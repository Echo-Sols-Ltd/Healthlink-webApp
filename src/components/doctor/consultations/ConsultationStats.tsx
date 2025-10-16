"use client";

import Card from "../Card";

const stats = [
  { label: "Total consultations", value: 12 },
  { label: "This month", value: 12 },
  { label: "Average Duration", value: 12 },
  { label: "Unique patients", value: 12 },
];

export default function ConsultationStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} title={stat.label} total={stat.value} />
      ))}
    </div>
  );
}
