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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AssignDoctorModalProps {
  patientName: string;
}

export default function AssignDoctorModal({ patientName }: AssignDoctorModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Assign Doctor</Button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle>Assign Doctor To {patientName}</DialogTitle>
          <DialogDescription>
            Select doctor, department, and schedule the appointment.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="doctor">Doctor</Label>
            <Input id="doctor" placeholder="Enter Doctor Name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="arrival">Arrival Date & Time</Label>
            <Input id="arrival" type="datetime-local" />
          </div>

          <Button className="w-full">Assign Doctor →</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
