import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import OrdersTable from "./components/OrdersTable";
import RevenueChart from "./components/RevenueChart";
import DrugsSold from "./components/DrugsSold";
import VendorActivity from "./components/VendorActivity";



const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard">
          <div className="top-cards">
            <DrugsSold />
            <VendorActivity/>
            <DashboardCard />
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
