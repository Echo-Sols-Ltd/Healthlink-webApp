"use client";

import { useState } from "react";
import ReferralTable from "./ReferralTable";

type Referral = {
  date: string;
  patient: string;
  department: string;
  specialist: string;
  reason: string;
  urgency: "Urgent" | "semi-urgent" | "normal";
  status: string;
};

const outgoingReferrals: Referral[] = [
  {
    date: "2020-04-05",
    patient: "Alice",
    department: "Cardiology",
    specialist: "Dr. Smith",
    reason: "ECG follow-up",
    urgency: "Urgent",
    status: "completed",
  },
  {
    date: "2020-04-06",
    patient: "Bob",
    department: "Orthopedics",
    specialist: "Dr. Jane",
    reason: "Fracture review",
    urgency: "semi-urgent",
    status: "pending",
  },
];

const incomingReferrals: Referral[] = [
  {
    date: "2020-04-07",
    patient: "Charlie",
    department: "Neurology",
    specialist: "Dr. John Doe",
    reason: "Migraine diagnosis",
    urgency: "normal",
    status: "in progress",
  },
  {
    date: "2020-04-08",
    patient: "Diana",
    department: "Pediatrics",
    specialist: "Dr. Jane Roe",
    reason: "Allergy consultation",
    urgency: "Urgent",
    status: "pending",
  },
];

export default function ReferralTabs() {
  const [activeTab, setActiveTab] = useState<"Outgoing" | "Incoming">("Outgoing");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded-t-md font-medium ${
            activeTab === "Outgoing"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("Outgoing")}
        >
          Outgoing
        </button>
        <button
          className={`px-4 py-2 rounded-t-md font-medium ${
            activeTab === "Incoming"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("Incoming")}
        >
          Incoming
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "Outgoing" ? (
        <ReferralTable data={outgoingReferrals} />
      ) : (
        <ReferralTable data={incomingReferrals} />
      )}
    </div>
  );
}
