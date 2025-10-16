import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FinancialDetails = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Financial details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Total Revenue
          </span>
          <span className="font-semibold">1 000 000 RWF</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
            Total Expenses
          </span>
          <span className="font-semibold">1 000 000 RWF</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Total Profit
          </span>
          <span className="font-semibold">1 000 000 RWF</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialDetails;
