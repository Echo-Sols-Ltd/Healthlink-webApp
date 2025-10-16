import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalendarCard = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">[Calendar widget coming soon]</p>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
