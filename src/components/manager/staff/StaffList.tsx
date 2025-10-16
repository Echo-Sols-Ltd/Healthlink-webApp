"use client";

import StaffCard from "./StaffCard";

interface Staff {
  name: string;
  id: string;
  role: string;
  joined: string;
  email: string;
  department: string;
  endDate: string;
  imageUrl: string;
}

interface StaffListProps {
  staff: Staff[];
}

export default function StaffList({ staff }: StaffListProps) {
  if (staff.length === 0) {
    return (
      <p className="text-center text-muted-foreground mt-6">
        No staff found.
      </p>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      {staff.map((member, i) => (
        <StaffCard key={i} {...member} />
      ))}
    </div>
  );
}
