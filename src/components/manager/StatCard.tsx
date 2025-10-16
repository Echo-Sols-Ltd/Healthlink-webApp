import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <Card className="shadow-md">
      <CardContent className="p-4 text-center">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold mt-2">{value}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
