"use client";

import Image from "next/image";

type Payment = {
  name: string;
  id: string;
  serviceDate: string;
  dueDate: string;
  status: "Completed" | "Pending";
  amount: string;
  method: string;
  avatar?: string;
};

const payments: Payment[] = [
  {
    name: "Sarah Sanyukaa",
    id: "#apt12345",
    serviceDate: "2024-01-15",
    dueDate: "2024-01-22",
    status: "Completed",
    amount: "150 000 rwf",
    method: "Mobile money",
    avatar: "/man.png",
  },
  {
    name: "Sarah Sanyukaa",
    id: "#apt12345",
    serviceDate: "2024-01-15",
    dueDate: "2024-01-22",
    status: "Completed",
    amount: "150 000 rwf",
    method: "Mobile money",
    avatar: "/man.png",
  },
];

export default function PaymentList({ data }: { data?: Payment[] }) {
  const list = data || payments;

  return (
    <div className="space-y-4">
      {list.map((p, i) => (
        <div
          key={i}
          className="flex items-center justify-between border rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="flex items-center gap-4">
            <Image
              src={p.avatar || ""}
              alt={p.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-xs text-gray-500">ID: {p.id}</p>
              <p className="text-xs text-gray-500">
                Service Date: {p.serviceDate}
              </p>
              <p className="text-xs text-gray-500">Due: {p.dueDate}</p>
              <p className="text-green-600 text-sm font-medium">{p.status}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold">{p.amount}</p>
            <p className="text-sm text-gray-500">{p.method}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
