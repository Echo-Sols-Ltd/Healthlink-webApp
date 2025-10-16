"use client";

import PaymentTabs from "@/components/doctor/payments/PaymentTabs";
import PaymentStats from "@/components/doctor/payments/PaymentStats";

export default function PaymentsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-xl font-semibold mb-2">Payments</h1>
      <p className="text-gray-500 mb-6">View and manage payment records</p>

      {/* Stats */}
      <PaymentStats />

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        <select className="border px-3 py-2 rounded text-sm">
          <option>Filter Status</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded text-sm"
        />
        <button className="ml-auto bg-gray-100 border px-4 py-2 rounded text-sm">
          Export Data
        </button>
      </div>

      {/* Tabs + Payments */}
      <div className="bg-white shadow rounded-lg border p-4">
        <PaymentTabs />
      </div>
    </div>
  );
}
