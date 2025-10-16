import Card from "@/components/doctor/Card";
import TopQueue from "@/components/doctor/TopQueue";
import NextInQueue from "@/components/doctor/NextQueue";
import RecentNotifications from "@/components/doctor/RecentNotification";
import CalendarCard from "@/components/doctor/CalendarCard";
import Navbar from "@/components/doctor/Navbar";
import Sidebar from "@/components/doctor/Sidebar";
import { Chatbot } from "@/components/patient/Chatbot";

const Page = () => {
  const data = [
    { title: "Waiting", total: 12 },
    { title: "In consultation", total: 12 },
    { title: "Referred", total: 12 },
    { title: "Completed", total: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex pt-20">
        <main className="flex-1 p-6">
          <h1 className="font-semibold text-2xl">Welcome back, John</h1>
          <p className="text-gray-600">
            Here&apos;s your health overview for today
          </p>

          <div className="flex gap-4">
            {data.map((item, idx) => (
              <div key={idx} className="flex-1">
                <Card title={item.title} total={item.total} />
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <TopQueue />
            <NextInQueue />
          </div>

          <div className="flex gap-4">
            <RecentNotifications />
            <CalendarCard />
          </div>
        </main>
      </div>
      <Chatbot />
    </div>
  );
};

export default Page;
