import React from "react";

const PaymentAnalytics: React.FC = () => {
  const trends = [
    { month: "January", amount: "32 500 rwf" },
    { month: "February", amount: "32 500 rwf" },
    { month: "March", amount: "32 500 rwf" },
    { month: "April", amount: "32 500 rwf" },
    { month: "May", amount: "32 500 rwf" },
    { month: "June", amount: "32 500 rwf" },
    { month: "July", amount: "32 500 rwf" },
    { month: "August", amount: "32 500 rwf" },
  ];

  return (
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Monthly trends</h2>
      <ul>
        {trends.map((trend, idx) => (
          <li key={idx} className="flex justify-between py-2 text-sm text-gray-700 border-b border-gray-200 p-2">
            <span>{trend.month}</span>
            <span>{trend.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentAnalytics;
