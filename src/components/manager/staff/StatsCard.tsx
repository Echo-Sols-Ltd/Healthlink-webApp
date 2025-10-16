"use client";

import Card from "@/components/doctor/Card";

interface Stat {
  label: string;
  value: number;
}

interface StatsCardsProps {
  stats: Stat[];
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, i) => (
        <Card key={i} title={stat.label} total={stat.value} />
      ))}
    </div>
  );
}
