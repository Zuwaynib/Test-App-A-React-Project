import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import OrdersTable from "./components/OrdersTable";
import RevenueChart from "./components/RevenueChart";

const Dashboard = () => {
  return (
    <div className="app-container">
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
          <RevenueChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
