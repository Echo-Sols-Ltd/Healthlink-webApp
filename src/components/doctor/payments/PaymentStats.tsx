"use client";

import Card from "../Card";

type StatCardProps = {
  label: string;
  total: number;
};

const stats: StatCardProps[] = [
  { label: "Today", total: 12000 },
  { label: "This week", total: 120000 },
  { label: "This month", total: 180000 },
  { label: "Total", total: 122000000 },
];

export default function PaymentStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((s, i) => (
        <Card key={i} title={s.label} total={s.total} />
      ))}
    </div>
  );
}
