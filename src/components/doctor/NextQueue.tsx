import { Button } from "@/components/ui/button"
import Link from "next/link"

const NextInQueue = () => {
  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm w-[350px]">
      <h2 className="font-semibold mb-2">Next In queue</h2>

      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">#DEP1234</span>
        <span className="text-xs border border-red-500 text-red-500 rounded-full px-2 py-0.5">urgent</span>
      </div>

      <p className="text-xs text-gray-500 mb-2">10:00 am</p>
      <p className="text-sm"><span className="font-semibold">Names: </span>Sarah Johnson</p>
      <p className="text-sm mb-4"><span className="font-semibold">Description: </span>Chest pain and shortness of breath</p>

      <Link href={`/doctor/patients/apt23056`}><Button className="w-full bg-[#118CDB] text-white">View Details</Button></Link>
    </div>
  )
}

export default NextInQueue
