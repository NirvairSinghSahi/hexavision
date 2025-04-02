import React from "react";

const Sidebar = ({ isOpen, closeSidebar }) => (
  <div className="sidebar" style={{ width: isOpen ? "250px" : "0" }}>
    <span className="close-btn" onClick={closeSidebar}>
      &times;
    </span>
    {[
      "THE HOUSE",
      "HIGH JEWELRY",
      "ENGAGEMENT & BRIDAL",
      "WATCHES",
      "ACCESSORIES",
      "SERVICES",
    ].map((item) => (
      <a href="#" key={item}>
        {item}
      </a>
    ))}
  </div>
);

export default Sidebar;
