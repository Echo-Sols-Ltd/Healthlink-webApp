"use client";

import { useState } from "react";

export default function ClinicalNotes() {
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    // TODO: Replace with API call
    console.log("Saved clinical notes:", notes);
    alert("Clinical notes saved!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">Clinical Notes</h2>

      {/* Textarea */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter clinical notes ..."
        className="w-full h-64 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}
