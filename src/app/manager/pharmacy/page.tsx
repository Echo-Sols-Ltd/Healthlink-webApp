"use client";

import { useState } from "react";
import InventoryFilters from "@/components/manager/pharmacy/InventoryFilters";
import InventoryList from "@/components/manager/pharmacy/InventoryList";
import InventoryStats from "@/components/manager/pharmacy/InventoryStats";
import PharmacyHeader from "@/components/manager/pharmacy/PharmacyHeader";

const allItems = [
  {
    name: "Amoxicillin 500mg",
    type: "Antibiotic",
    stock: "450/1000",
    supplier: "PharmaCorp",
    status: "In stock",
    lastRestocked: "2024-07-05",
  },
  {
    name: "Paracetamol 500mg",
    type: "Painkiller",
    stock: "320/800",
    supplier: "HealthPlus",
    status: "In stock",
    lastRestocked: "2024-07-10",
  },
  {
    name: "Ibuprofen 200mg",
    type: "Painkiller",
    stock: "0/600",
    supplier: "MediSupply",
    status: "Out of stock",
    lastRestocked: "2024-06-28",
  },
];

export default function PharmacyPage() {
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Apply search + filter
  const filteredItems = allItems.filter((item) => {
    const matchesType = filterType === "all" || item.type === filterType;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="p-6">
      <PharmacyHeader />
      <InventoryStats />

      <InventoryFilters
        filterType={filterType}
        setFilterType={setFilterType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <h2 className="text-xl font-semibold mb-4">Medical inventory</h2>
      <InventoryList items={filteredItems} />
    </div>
  );
}
