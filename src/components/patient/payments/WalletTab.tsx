import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const WalletTab = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">
        Wallet Management
      </h2>
      <p className="text-gray-600 mt-2">
        Manage your wallet balance and transactions
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Top-up wallet
            </h3>
            <p className="text-gray-600 text-sm">Add money to your wallet</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label
                htmlFor="topup-amount"
                className="text-sm font-medium text-gray-700"
              >
                Amount (RWF)
              </Label>
              <Input
                id="topup-amount"
                type="text"
                placeholder="Enter amount"
                className="mt-1"
              />
            </div>

            <div>
              <Label
                htmlFor="topup-method"
                className="text-sm font-medium text-gray-700"
              >
                Payment method
              </Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtn">MTN mobile money</SelectItem>
                  <SelectItem value="airtel">Airtel money</SelectItem>
                  <SelectItem value="bank">Bank transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Top Up
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Withdraw funds
            </h3>
            <p className="text-gray-600 text-sm">
              Transfer money from your wallet
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <Label
                htmlFor="withdraw-amount"
                className="text-sm font-medium text-gray-700"
              >
                Amount (RWF)
              </Label>
              <Input
                id="withdraw-amount"
                type="text"
                placeholder="Enter amount"
                className="mt-1"
              />
            </div>

            <div>
              <Label
                htmlFor="withdraw-method"
                className="text-sm font-medium text-gray-700"
              >
                Payment method
              </Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtn">MTN mobile money</SelectItem>
                  <SelectItem value="airtel">Airtel money</SelectItem>
                  <SelectItem value="bank">Bank transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
