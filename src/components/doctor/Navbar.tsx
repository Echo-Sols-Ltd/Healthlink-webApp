"use client"

import Image from "next/image"
import React from "react"
import { Input } from "@/components/ui/input"
import { BellDotIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow-sm px-4 py-3 bg-white flex items-center justify-between z-30">
      <div className="flex gap-11 items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={35} height={35} />
          <div className="hidden sm:block">
            <h1 className="font-semibold text-black">HealthLink</h1>
            <p className="text-[#6B6B6B] text-xs">
              Your health care assistant
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <Input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">ᶾᴀ</span>

          <Select defaultValue="en">
            <SelectTrigger className="w-[100px] border-none shadow-none px-0 focus:ring-0 focus:outline-none">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <BellDotIcon className="h-5 w-5" />

        <Avatar>
          <AvatarFallback className="flex items-center justify-center bg-[#118CDB] text-white font-semibold">
            I
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar
