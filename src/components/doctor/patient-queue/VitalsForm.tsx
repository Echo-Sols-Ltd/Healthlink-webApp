"use client";

import { useState } from "react";

export default function VitalsForm() {
  const [vitals, setVitals] = useState({
    bloodPressure: "",
    heartRate: "",
    temperature: "",
    spO2: "",
    weight: "",
    height: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVitals((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="bg-white shadow rounded-lg p-6 max-w-md">
      <h2 className="text-lg font-semibold mb-4">Vital Signs</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Blood Pressure
          </label>
          <input
            type="text"
            name="bloodPressure"
            value={vitals.bloodPressure}
            onChange={handleChange}
            placeholder="e.g., 120/80"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Heart rate
          </label>
          <input
            type="text"
            name="heartRate"
            value={vitals.heartRate}
            onChange={handleChange}
            placeholder="e.g., 72"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Temperature
          </label>
          <input
            type="text"
            name="temperature"
            value={vitals.temperature}
            onChange={handleChange}
            placeholder="e.g., 98.6 F"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            SpO₂
          </label>
          <input
            type="text"
            name="spO2"
            value={vitals.spO2}
            onChange={handleChange}
            placeholder="e.g., 98%"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Weight
          </label>
          <input
            type="text"
            name="weight"
            value={vitals.weight}
            onChange={handleChange}
            placeholder="e.g., 145 lbs"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Height
          </label>
          <input
            type="text"
            name="height"
            value={vitals.height}
            onChange={handleChange}
            placeholder="e.g., 5'6''"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
}
