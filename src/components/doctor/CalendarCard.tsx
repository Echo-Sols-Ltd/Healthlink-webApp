"use client"

import React from "react"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const CalendarCard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm w-[350px]">
      <h2 className="font-semibold mb-2">Calendar</h2>
      
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-full" />      
    </div>
  )
} 

export default CalendarCard
