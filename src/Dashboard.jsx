import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import OrdersTable from "./components/OrdersTable";
import RevenueChart from "./components/RevenueChart";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import SourceData from "./data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "#4169E1";
defaults.plugins.title.font.size = 20;
defaults.plugins.subtitle.align = "start";
defaults.plugins.subtitle.color = "#4169E1";

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
          <div className="revenueChart">
          <Line
            data={{
              labels: SourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Total Revenue",
                  data: SourceData.map((data) => data.value),
                  backgroundColor: ["#4169E1"],
                  tension: 0.5,
                  borderColor: "#4169E1",
                  pointStyle: false,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "#300000.5",
                },
                subtitle: {
                  display: true,
                  text: "Total Revenue",
                }
              }
            }}
          />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
