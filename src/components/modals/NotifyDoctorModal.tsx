"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface NotifyDoctorModalProps {
  patientName: string;
}

export default function NotifyDoctorModal({ patientName }: NotifyDoctorModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Notify</Button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle>Send Notifications To {patientName}</DialogTitle>
          <DialogDescription>
            Enter a notification message for the doctor.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Textarea placeholder="Enter notification message..." className="min-h-[120px]" />
          <Button className="w-full">Notify →</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
