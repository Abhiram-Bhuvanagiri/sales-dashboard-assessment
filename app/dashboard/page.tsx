import SalesChart from "@/components/organisms/SalesChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <SalesChart />
    </main>
  );
}
