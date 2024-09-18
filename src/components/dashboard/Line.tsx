import LineChart from "@/components/dashboard/LineChart";

const Dashboard = () => {
  const labels = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs"];
  const dataPoints = [10, 20, 20, 30, 80];

  return (
    <div className="w-full">
      <LineChart labels={labels} dataPoints={dataPoints} />
    </div>
  );
};

export default Dashboard;
