import React from "react"

const Card = ({ title, total }: { title: string; total: number }) => {
  return (
    <div className="rounded-lg border border-gray-200 shadow-sm bg-white">
      <div className="p-4 border-l-4 border-[#118CDB] rounded-lg">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-[#404040] mt-1">{total}</p>
      </div>
    </div>
  )
}

export default Card
