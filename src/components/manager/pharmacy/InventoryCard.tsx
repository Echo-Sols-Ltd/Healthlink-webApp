"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InventoryCardProps {
  name: string;
  type: string;
  stock: string;
  supplier: string;
  status: string;
  lastRestocked: string;
}

export default function InventoryCard({
  name,
  type,
  stock,
  supplier,
  status,
  lastRestocked,
}: InventoryCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-muted-foreground text-sm">{type}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <p><span className="font-medium">Stock level:</span> {stock}</p>
        <p><span className="font-medium">Supplier:</span> {supplier}</p>
        <p><span className="font-medium">Status:</span> <span className="text-green-600">{status}</span></p>
        <p><span className="font-medium">Last Restocked:</span> {lastRestocked}</p>
        <div className="flex gap-2 mt-4">
          <Button variant="outline">Remove</Button>
          <Button>Re-Order</Button>
        </div>
      </CardContent>
    </Card>
  );
}
