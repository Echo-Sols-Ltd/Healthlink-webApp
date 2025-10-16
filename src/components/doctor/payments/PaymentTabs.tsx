import React, { useState } from "react";
import PaymentAnalytics from "./PaymentAnalytics";
import PaymentSettings from "./PaymentSettings";
import PaymentList from "./PaymentList";

const PaymentsTab: React.FC = () => {
  const [tab, setTab] = useState("Recent");

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex border-b mb-4">
        <button
          onClick={() => setTab("Recent")}
          className={`px-4 py-2 ${
            tab === "Recent" ? "border-b-2 border-blue-500 font-semibold" : ""
          }`}
        >
          Recent Payments
        </button>
        <button
          onClick={() => setTab("Analytics")}
          className={`px-4 py-2 ${
            tab === "Analytics" ? "border-b-2 border-blue-500 font-semibold" : ""
          }`}
        >
          Analytics
        </button>
        <button
          onClick={() => setTab("Settings")}
          className={`px-4 py-2 ${
            tab === "Settings" ? "border-b-2 border-blue-500 font-semibold" : ""
          }`}
        >
          Payment settings
        </button>
      </div>

      {/* Tab content */}
      {tab === "Recent" && <PaymentList />}
      {tab === "Analytics" && <PaymentAnalytics />}
      {tab === "Settings" && <PaymentSettings />}
    </div>
  );
};

export default PaymentsTab;
