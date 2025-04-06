import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h2>Welcome Pharm Daniel</h2>
        <p>You have 4 pending orders</p>
      </div>
      <div className="header-right">
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round"></span>
        </label>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="profile-img"
        />
      </div>
    </header>
  );
};

export default Header;
