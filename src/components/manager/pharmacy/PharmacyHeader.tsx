"use client";

import AddMedicationModal from "@/components/modals/AddMedicationModal";

export default function PharmacyHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Pharmacy Management</h1>
        <p className="text-muted-foreground">Manage medical inventory</p>
      </div>
    
      <AddMedicationModal />
    </div>
  );
}
