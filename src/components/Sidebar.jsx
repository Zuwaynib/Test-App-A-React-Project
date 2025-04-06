import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Curamap</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Patient</li>
          <li>Notifications</li>
          <li>Payments</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
