"use client";

import {
  Calendar,
  LayoutDashboard,
  Menu,
  HelpCircle,
  LogOut,
  LucideCross,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const links = [
    { label: "Overview", href: "/manager", icon: LayoutDashboard },
    { label: "Patient Queues", href: "/manager/patients", icon: Calendar },
    { label: "Staff", href: "/manager/staff", icon: Users },
    { label: "Pharmacy", href: "/manager/pharmacy", icon: LucideCross },
  ];

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    setShowLogoutDialog(false);
    setOpen(false);
    router.push("/");
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed z-50 p-2 bg-white border rounded-md shadow-md"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <div
        className={`h-[93vh] w-64 bg-white border-r flex flex-col justify-between z-40 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <h1 className="font-semibold text-lg">Manager Portal</h1>
            <button onClick={() => setOpen(false)} className="md:hidden">
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="mt-2">
            {links.map((link, idx) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-2 text-sm rounded-r-md ${
                      isActive
                        ? "bg-[#E6F2FB] border-l-4 border-[#118CDB] font-medium text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3">
          <Link
            href="/manager/settings"
            className="flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-100 px-2 py-2 rounded-md"
          >
            <HelpCircle className="h-4 w-4" />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-100 px-2 py-2 rounded-md mt-2 w-full"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to log out? You will be redirected to the
              home page.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={cancelLogout} className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={confirmLogout}
              className="flex-1 bg-red-600 hover:bg-red-700"
            >
              Yes, Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Sidebar;
