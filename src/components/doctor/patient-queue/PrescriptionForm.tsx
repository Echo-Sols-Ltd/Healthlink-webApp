"use client";

import { useState } from "react";

export default function PrescriptionForm() {
  const [form, setForm] = useState({
    medication: "",
    dosage: "",
    duration: "",
    frequency: "",
    instructions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prescription submitted:", form);
    // Here you can call an API to save the prescription
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-6 max-w-md"
    >
      <h2 className="text-lg font-semibold mb-4">Prescription builder</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Medication</label>
          <input
            type="text"
            name="medication"
            value={form.medication}
            onChange={handleChange}
            placeholder="Medicine name"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Dosage</label>
          <input
            type="text"
            name="dosage"
            value={form.dosage}
            onChange={handleChange}
            placeholder="Dosage amount"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <input
            type="text"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="How long"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Frequency</label>
          <input
            type="text"
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            placeholder="Specify the frequency"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Specific instructions</label>
          <textarea
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            placeholder="Please enter any specific instructions for these medicines"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition"
      >
        Create prescription
      </button>
    </form>
  );
}
