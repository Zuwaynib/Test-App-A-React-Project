import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import OrdersTable from "./components/OrdersTable";
import RevenueChart from "./components/RevenueChart";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard">
          <div className="top-cards">
            <DashboardCard title="Drugs Sold" value="500" subValue="400" />
            <DashboardCard title="Vendor Activity" chart />
            <DashboardCard title="Patients Attended" value="300" />
          </div>
          <div className="middle-section">
            <OrdersTable />
          </div>
          <Bar
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 400],
                },
              ],
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
