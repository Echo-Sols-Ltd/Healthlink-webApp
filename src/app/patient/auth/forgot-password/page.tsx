"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/doctor/Navbar";

export default function PatientForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOTP = () => {
    if (email) {
      setStep(2);
    }
  };

  const handleVerifyOTP = () => {
    if (otp) {
      setStep(3);
    }
  };

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log("Password reset:", { email, newPassword });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <Link
            href="/patient/auth/login"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Reset Your Password
          </h1>
          <p className="text-gray-600">
            Enter your email to receive a reset code
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 max-w-md mx-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="mt-1"
                  required
                />
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={!email}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
              >
                Send Reset Code
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="otp"
                  className="text-sm font-medium text-gray-700"
                >
                  Enter Reset Code
                </Label>
                <Input
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the code sent to your email"
                  className="mt-1"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  We&apos;ve sent a reset code to {email}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleVerifyOTP}
                  disabled={!otp}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Verify Code
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="newPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="mt-1"
                  required
                />
                {newPassword &&
                  confirmPassword &&
                  newPassword !== confirmPassword && (
                    <p className="text-sm text-red-600 mt-1">
                      Passwords don&apos;t match
                    </p>
                  )}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleResetPassword}
                  disabled={
                    !newPassword ||
                    !confirmPassword ||
                    newPassword !== confirmPassword
                  }
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Reset Password
                </Button>
              </div>
            </div>
          )}

          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-gray-600">
              Remember your password?{" "}
              <Link
                href="/patient/auth/login"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
