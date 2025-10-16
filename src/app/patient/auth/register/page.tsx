"use client";

import { useState } from "react";
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
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export default function PatientRegistrationPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showAlert, setShowAlert] = useState(true);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    window.location.href = "/patient/auth/login";
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Blue Background (30% width, hidden on mobile) */}
      <div className="hidden lg:flex lg:w-[30%] bg-blue-600 flex-col justify-between p-8">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="HealthLink Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="text-white text-xl font-semibold">HealthLink</span>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            Let&apos;s set up your account to take control of your health.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Manage appointments, access records, and stay healthy – all in one
            secure place.
          </p>
        </div>

        {/* Bottom Images */}
        <div className="flex items-end justify-between">
          {/* Left Image - First Aid Kit */}
          <div className="relative">
            <Image
              src="/patients/boxImage.png"
              alt="First Aid Kit"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Middle Image - Doctor (Bigger) */}
          <div className="relative">
            <Image
              src="/patients/doctorImage.png"
              alt="Doctor"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Right Image - Stethoscope */}
          <div className="relative">
            <Image
              src="/patients/doctorTool.png"
              alt="Stethoscope"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - White Background (70% width, full width on mobile) */}
      <div className="flex-1 lg:w-[70%] bg-white p-6 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-lg">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-blue-600"></div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-gray-300"></div>
          </div>

          {/* Alert Message */}
          {showAlert && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-sm text-red-700">
                  <p className="font-medium">Patient Registration Only.</p>
                  <p className="text-red-600 mt-1">
                    This signup is for patients accessing healthcare services...
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="text-red-400 hover:text-red-600 ml-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Form Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Let&apos;s Get Started!
            </h2>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter your first name"
                className="mt-1 w-full"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter your last name"
                className="mt-1 w-full"
              />
            </div>

            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                className="mt-1 w-full"
              />
            </div>

            {/* Country of Residence */}
            <div>
              <Label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country of Residence
              </Label>
              <Select
                value={formData.country}
                onValueChange={(value) => handleInputChange("country", value)}
              >
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rwanda">Rwanda</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="uganda">Uganda</SelectItem>
                  <SelectItem value="tanzania">Tanzania</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number */}
            <div>
              <Label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </Label>
              <div className="mt-1">
                <PhoneInput
                  international
                  defaultCountry="RW"
                  value={formData.phoneNumber}
                  onChange={(value) =>
                    handleInputChange("phoneNumber", value || "")
                  }
                  placeholder="Enter your phone number"
                  className="w-full"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Create a password"
                className="mt-1 w-full"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm your password"
                className="mt-1 w-full"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              GET STARTED
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/patient/auth/login"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
