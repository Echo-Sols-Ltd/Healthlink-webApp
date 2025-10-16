import React from "react";

const PaymentSettings: React.FC = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 max-w-md">
      <h2 className="text-lg font-semibold mb-4">Payment methods</h2>

      {/* Preferred method */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred method
        </label>
        <select className="w-full border rounded-md px-3 py-2">
          <option value="">Select method</option>
          <option value="mobile_money">Mobile Money</option>
          <option value="bank_transfer">Bank Transfer</option>
          <option value="card">Card</option>
        </select>
      </div>

      {/* Mobile Money Number */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Money Number
        </label>
        <input
          type="text"
          placeholder="+250 777 888 999"
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      {/* Update Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Update
      </button>
    </div>
  );
};

export default PaymentSettings;
