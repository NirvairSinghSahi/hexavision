import React from "react";

const navItems = [
  { label: "THE HOUSE", link: "/" },
  { label: "HIGH JEWELRY", link: "/collections" },
  { label: "ENGAGEMENT & BRIDAL", link: "/engagement" },
  { label: "WATCHES", link: "/watches" },
  { label: "ACCESSORIES", link: "/accessories" },
  { label: "SERVICES", link: "/services" },
];

const Navbar = () => (
  <nav className="custom-navbar sticky-top">
    {navItems.map((item) => (
      <a href={item.link} className="nav-link" key={item.label}>
        {item.label}
      </a>
    ))}
  </nav>
);

export default Navbar;
