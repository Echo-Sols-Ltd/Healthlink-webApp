import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * @component FinancialDetails
 * @description Displays financial statistics in an accessible format
 * @accessibility Uses semantic HTML and ARIA labels
 */
const FinancialDetails = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("rw-RW", {
      style: "currency",
      currency: "RWF",
    }).format(amount);
  };

  return (
    <Card className="shadow-md" role="region" aria-label="Financial Statistics">
      <CardHeader>
        <CardTitle>Financial details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 bg-orange-500 rounded-full"
              aria-hidden="true"
            ></span>
            Total Revenue
          </span>
          <span className="font-semibold" aria-label="Total Revenue">
            {formatCurrency(1000000)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 bg-orange-400 rounded-full"
              aria-hidden="true"
            ></span>
            Total Expenses
          </span>
          <span className="font-semibold" aria-label="Total Expenses">
            {formatCurrency(1000000)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 bg-green-500 rounded-full"
              aria-hidden="true"
            ></span>
            Total Profit
          </span>
          <span className="font-semibold" aria-label="Total Profit">
            {formatCurrency(1000000)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialDetails;
