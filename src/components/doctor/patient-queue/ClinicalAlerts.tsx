import React from "react";

interface Alert {
  id: number;
  message: string;
}

const ClinicalAlerts: React.FC = () => {
  const alerts: Alert[] = [
    { id: 1, message: "Patient allergic ot penicillin" },
    { id: 2, message: "Annual mammogram screening is overdue" },
  ];

  return (
    <div className="max-w-3xl bg-white border rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Clinical alerts</h2>
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li key={alert.id} className="flex items-start text-sm text-gray-700">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-1 mr-2"></span>
            <span>{alert.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClinicalAlerts;
