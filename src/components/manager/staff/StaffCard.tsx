"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import EditUserModal from "@/components/modals/EditUserModal";
import DeactivateUserModal from "@/components/modals/DeactivateUserModal";

interface StaffCardProps {
  name: string;
  id: string;
  role: string;
  joined: string;
  email: string;
  department: string;
  endDate: string;
  imageUrl: string;
}

export default function StaffCard({
  name,
  id,
  role,
  joined,
  email,
  department,
  endDate,
  imageUrl,
}: StaffCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <Image
          src={imageUrl}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <CardTitle>{name}</CardTitle>
          <p className="text-muted-foreground text-sm">ID: {id}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <p>
          <span className="font-medium">Role:</span> {role}
        </p>
        <p>
          <span className="font-medium">Joined:</span> {joined}
        </p>
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Department:</span> {department}
        </p>
        <p>
          <span className="font-medium">End date:</span> {endDate}
        </p>

        <div className="flex gap-2 mt-4">
          {/* Edit Modal */}
          <EditUserModal userName={name} />

          {/* Deactivate Modal */}
          <DeactivateUserModal userName={name} />
        </div>
      </CardContent>
    </Card>
  );
}
