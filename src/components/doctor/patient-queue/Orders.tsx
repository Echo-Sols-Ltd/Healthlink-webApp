import React from "react";
import { Search } from "lucide-react";

interface Order {
  id: number;
  type: "Lab" | "Imaging";
  name: string;
  date: string;
  status: "Pending" | "Completed";
}

const Orders: React.FC = () => {
  const orders: Order[] = [
    { id: 1, type: "Lab", name: "Complete Blood Count", date: "2024-01-20", status: "Pending" },
    { id: 2, type: "Imaging", name: "Chest X-Ray", date: "2024-01-18", status: "Completed" },
  ];

  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 min-h-[300px] flex items-center justify-center">
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-600">
          <Search className="w-16 h-16 mb-4" />
          <p className="text-sm font-medium">No specific Lab or imaging orders</p>
        </div>
      ) : (
        <div className="w-full">
          <h2 className="text-lg font-semibold mb-4">Orders</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Type</th>
                <th className="p-2">Order</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{order.type}</td>
                  <td className="p-2">{order.name}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
