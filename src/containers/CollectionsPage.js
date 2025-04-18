import React, { useState, lazy, Suspense } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Showcase from "../components/Showcase";
import CollectionSection from "../components/CollectionSection";
import FindMyHexa from "../components/FindMyHexa";
import Footer from "../components/Footer";
import "../mete.css";

const JewelryCatalog = lazy(() => import("../components/JewelryCatalog"));

const CollectionsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const collections = [
    {
      title: "Opulent Horizons Collection",
      img: "/meteimages/image 25.png",
      desc: "Celebrate the beauty of the world’s most luxurious jewelry with Hexa Vision.",
      subs: [
        {
          img: "/meteimages/image 24.png",
          title: "Hexa Signatures Collection",
          desc: "Exquisite diamonds take center stage in Hexa Vision’s most iconic design masterpieces.",
        },
        {
          img: "/meteimages/image 23.png",
          title: "Heritage Collection",
          desc: "Unique jewels featuring D-color, internally flawless diamond centerpieces.",
        },
      ],
    },
    {
      title: "Metropolitan Collection",
      img: "/meteimages/image 46.png",
      desc: "With its vibrant urban heritage, the city continues to provide Hexa Vision designers with endless inspiration.",
      subs: [
        {
          img: "/meteimages/image 26.png",
          title: "Hexa With Love Collection",
          desc: "Captures the intensity of love with remarkable jewels.",
        },
        {
          img: "/meteimages/image 27.png",
          title: "Hexa Vision Hope Collection",
          desc: "Featuring unique blue diamond pieces inspired by the Hope Diamond necklace.",
        },
      ],
    },
    {
      title: "The Exquisite Collection",
      img: "/meteimages/image 22.png",
      desc: "Crafted from diamonds, rubies, sapphires, emeralds, and other precious gemstones.",
      subs: [],
    },
    {
      subsOnly: true,
      subs: [
        {
          img: "/meteimages/image 28.png",
          title: "Marvelous Creations",
          desc: "Unites extraordinary natural treasures into sublime creations.",
        },
        {
          img: "/meteimages/image 29.png",
          title: "Enigma Collection",
          desc: "Behind every exquisite jewel lies a hidden secret.",
        },
      ],
    },
    {
      title: "Regal Treasures Collection",
      img: "/meteimages/image 30.png",
      desc: "Showcases the finest rare gemstones through timeless, elegant designs.",
      subs: [],
    },
  ];

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <Header openSidebar={openSidebar} />
      <Navbar />

      {/* Mobile Header */}
      <header className="mobile-header">
        <h1>HEXA VISION</h1>
        <span className="mobile-menu-icon" onClick={openSidebar}>
          &#9776;
        </span>
      </header>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />

      <Showcase />
      <Suspense fallback={<div>Loading jewelry...</div>}>
        <JewelryCatalog />
      </Suspense>
      {collections.map((col, i) => (
        <CollectionSection key={i} {...col} />
      ))}
      <FindMyHexa />
      <Footer />
    </>
  );
};

export default CollectionsPage;
