import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Transaction } from "./types";

interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => (
  <div className="bg-white rounded-lg border shadow-sm">
    <div className="overflow-x-auto">
      <Table className="min-w-[800px]">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-900">
              Date
            </TableHead>
            <TableHead className="font-semibold text-gray-900">
              Description
            </TableHead>
            <TableHead className="font-semibold text-gray-900">
              Method
            </TableHead>
            <TableHead className="font-semibold text-gray-900">
              Reference
            </TableHead>
            <TableHead className="font-semibold text-gray-900">
              Amount
            </TableHead>
            <TableHead className="font-semibold text-gray-900">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="hover:bg-gray-50">
              <TableCell className="text-sm text-gray-600">
                {transaction.date}
              </TableCell>
              <TableCell className="text-sm text-gray-900 font-medium">
                <div className="flex flex-col">
                  <span
                    className="font-bold truncate max-w-[200px]"
                    title={transaction.description}
                  >
                    {transaction.description}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {transaction.subDescription}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {transaction.method}
              </TableCell>
              <TableCell className="text-sm text-gray-600 font-mono">
                {transaction.reference}
              </TableCell>
              <TableCell className="text-sm font-medium">
                <span
                  className={
                    transaction.type === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {transaction.amount}
                </span>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.status === "failed"
                      ? "destructive"
                      : "secondary"
                  }
                  className={`${
                    transaction.status === "failed"
                      ? "bg-red-100 text-red-800 border-red-200"
                      : "bg-green-100 text-green-800 border-green-200"
                  } px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {transaction.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);
