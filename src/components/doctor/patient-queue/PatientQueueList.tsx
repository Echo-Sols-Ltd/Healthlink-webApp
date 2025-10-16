import PatientCard from "./PatientCard";

type Patient = {
  id: string;
  name: string;
  description: string;
  serviceDate: string;
  image: string;
  urgent: boolean;
};

export default function PatientQueueList({
  search,
  selectedDate,
}: {
  search?: string;
  selectedDate?: Date;
}) {
  const patients: Patient[] = [
    {
      id: "apt23056",
      name: "James Bond",
      description: "Chest pain",
      serviceDate: "2025-08-24",
      image: "/man.png",
      urgent: true,
    },
    {
      id: "apt39244",
      name: "Tyres Gibson",
      description: "Headache",
      serviceDate: "2025-08-25",
      image: "/man.png",
      urgent: false,
    },
    {
      id: "apt23057",
      name: "Jonathan Kuminga",
      description: "Fever",
      serviceDate: "2025-08-24",
      image: "/man.png",
      urgent: true,
    },
  ];

  // Filter patients
  const filteredPatients = patients.filter((p) => {
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchesDate =
      !selectedDate ||
      new Date(p.serviceDate).toDateString() === selectedDate.toDateString();

    return matchesSearch && matchesDate;
  });

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">Today</h3>
      {filteredPatients.length > 0 ? (
        filteredPatients.map((patient, idx) => (
          <PatientCard key={idx} patient={patient} />
        ))
      ) : (
        <p className="text-gray-500">No patients match your filters.</p>
      )}
    </div>
  );
}
