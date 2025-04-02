import React from "react";

const Navbar = () => (
  <nav className="custom-navbar sticky-top">
    {[
      "THE HOUSE",
      "HIGH JEWELRY",
      "ENGAGEMENT & BRIDAL",
      "WATCHES",
      "ACCESSORIES",
      "SERVICES",
    ].map((item) => (
      <a href="#" className="nav-link" key={item}>
        {item}
      </a>
    ))}
  </nav>
);

export default Navbar;
