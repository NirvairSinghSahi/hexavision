import React from "react";

const Header = ({ openSidebar }) => (
  <header className="custom-header">
    <span className="mobile-menu-icon" onClick={openSidebar}>
      &#9776;
    </span>
    <h1>HEXA-VISION</h1>
    <div className="divider-container">
      <div className="divider-line"></div>
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 28 43"
          fillRule="evenodd"
        >
          <path d="M20.63 0H7.198..." />
        </svg>
      </div>
      <div className="divider-line"></div>
    </div>
  </header>
);

export default Header;
