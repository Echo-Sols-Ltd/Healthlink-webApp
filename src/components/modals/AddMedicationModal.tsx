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

export default function AddMedicationModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary">Add medication</Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add Medication</DialogTitle>
          <DialogDescription>
            Add a new medication to inventory
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Medicine name</Label>
            <Input id="name" placeholder="Amoxillin" />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="antibiotic">Antibiotic</SelectItem>
                <SelectItem value="analgesic">Analgesic</SelectItem>
                <SelectItem value="vaccine">Vaccine</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Current Stock Quantity</Label>
            <Input id="quantity" placeholder="500 mg" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expiry">Current stock expiry date</Label>
            <Input id="expiry" type="date" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="supplier">Initial Supplier Name</Label>
            <Input id="supplier" placeholder="INPA ltd co." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contacts">Initial Supplier Contacts</Label>
            <Input id="contacts" placeholder="+250 988 9988 88" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="storage">Storage Instructions</Label>
          <Input id="storage" placeholder="Enter any storage instructions for the medicine" />
        </div>

        <Button className="w-full mt-4 bg-primary text-white">
          ADD MEDICATION →
        </Button>
      </DialogContent>
    </Dialog>
  );
}
