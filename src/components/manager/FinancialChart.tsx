"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 1200000, expenses: 800000, profit: 400000 },
  { name: "Feb", revenue: 1300000, expenses: 900000, profit: 400000 },
  { name: "Mar", revenue: 1250000, expenses: 850000, profit: 400000 },
  { name: "Apr", revenue: 1400000, expenses: 950000, profit: 450000 },
  { name: "May", revenue: 1350000, expenses: 920000, profit: 430000 },
  { name: "Jun", revenue: 1450000, expenses: 970000, profit: 480000 },
];

const FinancialChart = () => {
  return (
    <Card className="md:col-span-2 shadow-md">
      <CardHeader>
        <CardTitle>Overall Financial Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#f97316" name="Revenue" />
            <Bar dataKey="expenses" fill="#fb923c" name="Expenses" />
            <Bar dataKey="profit" fill="#22c55e" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FinancialChart;
