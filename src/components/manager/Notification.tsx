import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Notifications = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Recent Notifications</CardTitle>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            View more
          </a>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Here are your recent medications.</p>
      </CardContent>
    </Card>
  );
};

export default Notifications;
