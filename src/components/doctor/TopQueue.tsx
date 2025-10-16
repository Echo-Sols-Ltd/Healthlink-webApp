import { Button } from "@/components/ui/button"
import Link from "next/link"

const patients = [
  { name: "Sarah Johnson", desc: "Chest pain and shortness of breath", position: 3 },
  { name: "Sarah Johnson", desc: "Chest pain and shortness of breath", position: 3 },
  { name: "Sarah Johnson", desc: "Chest pain and shortness of breath", position: 3 },
]

const TopQueue = () => {
  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm flex-1">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Top Queue</h2>
        <Link href={`/doctor/patients`}><button className="text-sm text-[#118CDB] hover:underline">View more</button></Link>
      </div>
      <p className="text-sm text-gray-600 mb-4">Here are your top queues.</p>

      <div className="space-y-3">
        {patients.map((p, idx) => (
          <div key={idx} className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-600">{p.desc}</p>
              <p className="text-xs text-gray-500">position: {p.position}</p>
            </div>
            <div className="flex gap-2">
              <Link href={`/doctor/patients/apt23056`}><Button variant="outline" size="sm">View Details</Button></Link>
              <Button size="sm" className="bg-[#118CDB] text-white">Call In</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopQueue
