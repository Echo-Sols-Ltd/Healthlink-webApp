"use client";

import { Download } from "lucide-react";
import * as XLSX from "xlsx";

type Referral = {
  date: string;
  patient: string;
  department: string;
  specialist: string;
  reason: string;
  urgency: "Urgent" | "semi-urgent" | "normal";
  status: string;
};

const referrals: Referral[] = [
  {
    date: "2020-04-5",
    patient: "King Faisal",
    department: "Pediatrics",
    specialist: "Dr John Doe",
    reason: "Heart follow up",
    urgency: "Urgent",
    status: "completed",
  },
  {
    date: "2020-04-5",
    patient: "King Faisal",
    department: "Pediatrics",
    specialist: "Dr John Doe",
    reason: "Heart follow up",
    urgency: "semi-urgent",
    status: "pending",
  },
];

export default function ReferralTable({ data }: { data?: Referral[] }) {
  const tableData = data || referrals;
  const handleExport = (records: Referral[], filename = "referrals.xlsx") => {
    const worksheet = XLSX.utils.json_to_sheet(records);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Referrals");
    XLSX.writeFile(workbook, filename);
  };

  return (
    <div className="bg-white shadow rounded-lg border p-4">
      {/* Export All */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => handleExport(tableData, "referrals.xlsx")}
          className="flex items-center gap-2 px-4 py-2 text-sm border rounded hover:bg-gray-50"
        >
          <Download className="w-4 h-4" />
          Export All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Patient</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Specialist</th>
              <th className="px-4 py-2 text-left">Reason</th>
              <th className="px-4 py-2 text-left">Urgency</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((r, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-2">{r.date}</td>
                <td className="px-4 py-2">{r.patient}</td>
                <td className="px-4 py-2">{r.department}</td>
                <td className="px-4 py-2">{r.specialist}</td>
                <td className="px-4 py-2">{r.reason}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    r.urgency === "Urgent"
                      ? "text-red-600"
                      : r.urgency === "semi-urgent"
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {r.urgency}
                </td>
                <td className="px-4 py-2">{r.status}</td>
                <td className="px-4 py-2">                  
                  <button
                    onClick={() =>
                      handleExport([r], `${r.patient.replace(/\s+/g, "_")}.xlsx`)
                    }
                    className="p-2 rounded hover:bg-gray-100"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
