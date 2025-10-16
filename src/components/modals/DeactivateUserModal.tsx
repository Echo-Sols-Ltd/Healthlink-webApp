"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeactivateUserModalProps {
  userName: string;
}

export default function DeactivateUserModal({ userName }: DeactivateUserModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Deactivate</Button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-red-600">DEACTIVATE ALERT</DialogTitle>
        </DialogHeader>

        <p>Are you sure you want to deactivate the account of <strong>{userName}</strong>?</p>

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="destructive">Deactivate</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
