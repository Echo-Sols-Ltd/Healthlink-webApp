const RecentNotifications = () => {
  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm flex-1">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Recent Notifications</h2>
        <button className="text-sm text-[#118CDB] hover:underline">View more</button>
      </div>
      <p className="text-sm text-gray-600">Here are your recent medications.</p>
    </div>
  )
}

export default RecentNotifications
