import React from "react";
import Card from "../doctor/Card";

const StatsGrid = () => {
  const stats = [
    { title: "Total Visit Requests", total: 12 },
    { title: "Total Staff", total: 12 },
    { title: "Total medical inventory", total: 12 },
    { title: "Total facilities", total: 12 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <Card key={i} title={s.title} total={s.total} />
      ))}
    </div>
  );
};

export default StatsGrid;
