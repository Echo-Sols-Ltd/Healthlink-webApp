"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/doctor/Navbar";
import PatientSidebar from "@/components/patient/PatientSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function ViewVisitsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "general", name: "General Medicine" },
    { id: "cardiology", name: "Cardiology" },
    { id: "dermatology", name: "Dermatology" },
    { id: "orthopedics", name: "Orthopedics" },
    { id: "pediatrics", name: "Pediatrics" },
    { id: "neurology", name: "Neurology" },
    { id: "psychiatry", name: "Psychiatry" },
    { id: "ophthalmology", name: "Ophthalmology" },
  ];

  const visits = [
    {
      id: 1,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: false,
    },
    {
      id: 2,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: false,
    },
    {
      id: 3,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: true,
    },
    {
      id: 4,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: true,
    },
    {
      id: 5,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: true,
    },
    {
      id: 6,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: true,
    },
    {
      id: 7,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: true,
    },
    {
      id: 8,
      date: "2020-04-5",
      facility: "King Faisal",
      department: "Pediatrics",
      doctor: "Dr John Doe",
      diagnosis: "Heart follow up",
      prescription: "penicilin 2",
      payment: "150 000 rwf",
      hasDownload: true,
    },
  ];

  const filteredVisits = visits.filter((visit) => {
    const matchesDepartment =
      selectedDepartment === "" ||
      selectedDepartment === "all" ||
      visit.department.toLowerCase().includes(selectedDepartment.toLowerCase());
    const matchesSearch =
      searchQuery === "" ||
      visit.facility.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visit.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visit.diagnosis.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDepartment && matchesSearch;
  });

  const totalPages = Math.ceil(filteredVisits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVisits = filteredVisits.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PatientSidebar isCollapsed={false} />
        <div className="pt-20 px-4 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Visit Details</h1>
            <p className="text-gray-600 mt-2">See appointment details</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept.id} value={dept.id}>
                      {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Facility
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Doctor
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Diagnosis
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Prescription
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentVisits.map((visit) => (
                      <tr key={visit.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.date}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.facility}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.department}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.doctor}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.diagnosis}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.prescription}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.payment}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {visit.hasDownload && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(endIndex, filteredVisits.length)} of{" "}
                  {filteredVisits.length} results
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
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
                Visit Details
              </h1>
              <p className="text-gray-600 mt-2">See appointment details</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Filter Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={dept.id}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px]">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Facility
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Diagnosis
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Prescription
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payment
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentVisits.map((visit) => (
                        <tr key={visit.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.facility}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.department}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.doctor}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.diagnosis}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.prescription}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.payment}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {visit.hasDownload && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, filteredVisits.length)} of{" "}
                    {filteredVisits.length} results
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-700">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
