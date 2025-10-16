"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/doctor/Navbar";
import PatientSidebar from "@/components/patient/PatientSidebar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar as CalendarIcon,
  HelpCircle,
  Clipboard,
  FileText,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function CreateVisitPage() {
  const [formData, setFormData] = useState({
    department: "",
    reason: "",
    preferredDate: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const departments = [
    {
      id: "general",
      name: "General Medicine",
      description: "General health consultations and check-ups",
    },
    {
      id: "cardiology",
      name: "Cardiology",
      description: "Heart and cardiovascular health",
    },
    {
      id: "dermatology",
      name: "Dermatology",
      description: "Skin conditions and treatments",
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      description: "Bone and joint health",
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      description: "Child healthcare services",
    },
    {
      id: "neurology",
      name: "Neurology",
      description: "Nervous system disorders",
    },
    {
      id: "psychiatry",
      name: "Psychiatry",
      description: "Mental health services",
    },
    {
      id: "ophthalmology",
      name: "Ophthalmology",
      description: "Eye care and vision services",
    },
  ];

  const experienceTips = [
    {
      icon: Clipboard,
      text: "Prepare a list of questions for your doctor.",
    },
    {
      icon: FileText,
      text: "Bring any relevant medical records or test results.",
    },
    {
      icon: Clock,
      text: "Arrive 15 minutes early for your appointment.",
    },
    {
      icon: AlertTriangle,
      text: "Inform the staff about any allergies or current medications.",
    },
  ];

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PatientSidebar isCollapsed={false} />
        <div className="pt-20 px-4 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create A visit</h1>
            <p className="text-gray-600 mt-2">Book An appointment Today</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Visit Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700"
                  >
                    Select Department
                  </Label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) =>
                      handleInputChange("department", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept.id} value={dept.id}>
                          {dept.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="reason"
                    className="text-sm font-medium text-gray-700"
                  >
                    Reason for visit
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder="Please describe any symptoms, concerns or reasons for visit..."
                    value={formData.reason}
                    onChange={(e) =>
                      handleInputChange("reason", e.target.value)
                    }
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="preferredDate"
                    className="text-sm font-medium text-gray-700"
                  >
                    Preferred Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  Confirm and Join Queue
                </Button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                For better experience of this visit ...
              </h2>
              <div className="space-y-3">
                {experienceTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <tip.icon className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{tip.text}</p>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <HelpCircle className="h-4 w-4 mr-2" />I have questions
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Available Departments
              </h2>

              <div className="space-y-3">
                {departments.map((dept) => (
                  <div key={dept.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 flex">
        <div className="w-64 flex-shrink-0">
          <PatientSidebar isCollapsed={false} />
        </div>

        <div className="flex-1 p-6">
          <div className="w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Create A visit
              </h1>
              <p className="text-gray-600 mt-2">Book An appointment Today</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Visit Details
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="department"
                        className="text-sm font-medium text-gray-700"
                      >
                        Select Department
                      </Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) =>
                          handleInputChange("department", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.id} value={dept.id}>
                              {dept.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="reason"
                        className="text-sm font-medium text-gray-700"
                      >
                        Reason for visit
                      </Label>
                      <Textarea
                        id="reason"
                        placeholder="Please describe any symptoms, concerns or reasons for visit..."
                        value={formData.reason}
                        onChange={(e) =>
                          handleInputChange("reason", e.target.value)
                        }
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="preferredDate"
                        className="text-sm font-medium text-gray-700"
                      >
                        Preferred Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    >
                      Confirm and Join Queue
                    </Button>
                  </form>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    For better experience of this visit ...
                  </h2>
                  <div className="space-y-4">
                    {experienceTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <tip.icon className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{tip.text}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <HelpCircle className="h-4 w-4 mr-2" />I have questions
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Available Departments
                  </h2>

                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div key={dept.id} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm">
                            {dept.name}
                          </h3>
                          <p className="text-xs text-gray-600 mt-1">
                            {dept.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
