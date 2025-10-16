"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import AssignDoctorModal from "@/components/modals/AssignDoctorModal";
import NotifyDoctorModal from "@/components/modals/NotifyDoctorModal";

interface QueueCardProps {
  name: string;
  id: string;
  description: string;
  serviceDate: string;
  imageUrl: string;
}

export default function QueueCard({ name, id, description, serviceDate, imageUrl }: QueueCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <Image src={imageUrl} alt={name} width={40} height={40} className="rounded-full" />
        <div>
          <CardTitle>{name}</CardTitle>
          <p className="text-muted-foreground text-sm">ID: {id}</p>
        </div>
      </CardHeader>

      <CardContent className="flex justify-between items-center">
        <div className="space-y-1">
          <p><span className="font-medium">Description:</span> {description}</p>
          <p><span className="font-medium">Service Date:</span> {serviceDate}</p>
        </div>

        {/* Buttons with modals */}
        <div className="flex gap-2">
          <AssignDoctorModal patientName={name} />
          <NotifyDoctorModal patientName={name} />
        </div>
      </CardContent>
    </Card>
  );
}
