"use client";

import ReferralTabs from "@/components/doctor/referrals/ReferralTabs";

export default function ReferralsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Referrals & Transfers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          + New Referral
        </button>
      </div>

      <p className="text-gray-500 mb-4">
        Manage patient referrals and transfers
      </p>

      {/* Filters */}
      <div className="flex gap-2 mb-4 justify-end">
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
      </div>

      {/* Tabs + Table */}
      <div className="bg-white shadow rounded-lg border p-4">
        <ReferralTabs />
      </div>
    </div>
  );
}
