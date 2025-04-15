import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../AmirAlipour.css";
import LazyImage from "../components/LazyImage";


const WatchesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    document.getElementById("sidebar").style.width = "250px";
  };
  
  const closeSidebar = () => {
    document.getElementById("sidebar").style.width = "0";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".slide-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  const cardData1 = [
    {
      img: "AmirAlipour-images/2-1.webp",
      title: "Timeless Elegance",
      text: "A watch that speaks sophistication, perfect for formal occasions.",
    },
    {
      img: "AmirAlipour-images/2-2.webp",
      title: "Modern Chronograph",
      text: "Designed for precision and style, suitable for any adventure.",
    },
    {
      img: "AmirAlipour-images/2-3.webp",
      title: "Vintage Classic",
      text: "Inspired by timeless designs, ideal for everyday wear.",
    },
    {
      img: "AmirAlipour-images/2-4.webp",
      title: "Diamond Luxe",
      text: "A sparkling timepiece that combines elegance and glamour.",
    },
    {
      img: "AmirAlipour-images/2-5.webp",
      title: "Moonphase Marvel",
      text: "Showcasing lunar cycles with a touch of celestial artistry.",
    },
    {
      img: "AmirAlipour-images/2-6.webp",
      title: "Sporty Explorer",
      text: "Built for durability and performance, ready for the outdoors.",
    },
    {
      img: "AmirAlipour-images/2-7.webp",
      title: "Galactic Voyager",
      text: "A futuristic design inspired by the mysteries of the cosmos.",
    },
    {
      img: "AmirAlipour-images/2-8.avif",
      title: "Royal Enchantment",
      text: "A regal watch adorned with intricate details and luxurious accents.",
    },
    {
      img: "AmirAlipour-images/2-9.webp",
      title: "Gradient Beauty",
      text: "An exquisite timepiece crafted for those who appreciate sophistication and style.",
    },
  ];

  const cardData2 = [
    {
      img: "AmirAlipour-images/1-1.webp",
      title: "Heritage Collection",
      text: "A tribute to classic craftsmanship and enduring quality.",
    },
    {
      img: "AmirAlipour-images/1-2.webp",
      title: "Minimalist Design",
      text: "Sleek and simple, a perfect addition to a modern wardrobe.",
    },
    {
      img: "AmirAlipour-images/1-3.webp",
      title: "Artistic Fusion",
      text: "Where creativity meets horology, a masterpiece on your wrist.",
    },
    {
      img: "AmirAlipour-images/1-4.webp",
      title: "Masterpiece Automatic",
      text: "Self-winding precision in a luxurious design.",
    },
    {
      img: "AmirAlipour-images/1-5.webp",
      title: "Bold Statement",
      text: "An iconic design for those who love to stand out.",
    },
    {
      img: "AmirAlipour-images/1-6.webp",
      title: "Urban Charm",
      text: "A stylish companion for the modern city dweller.",
    },
    {
      img: "AmirAlipour-images/1-7.webp",
      title: "Luxe Precision",
      text: "Combining precision engineering with opulent design for a flawless look.",
    },
    {
      img: "AmirAlipour-images/1-8.webp",
      title: "Avant-Garde Style",
      text: "A futuristic approach to timekeeping, bold and innovative.",
    },
    {
      img: "AmirAlipour-images/1-9.webp",
      title: "Rose Radiance",
      text: "Elegant and captivating, featuring a rose gold frame and artistic dial work.",
    },
  ];

  const branches = [
    "New York",
    "Paris",
    "Tokyo",
    "Dubai",
    "London",
    "Hong Kong",
    "Sydney",
    "Berlin",
    "Singapore",
    "Miami",
  ];

  const descriptions = [
    "Located in the heart of Manhattan, our New York branch offers an exquisite range of timepieces.",
    "Experience luxury and craftsmanship in our flagship Paris branch near the Champs-Élysées.",
    "A blend of tradition and innovation awaits at our Tokyo branch in Ginza.",
    "Discover unparalleled luxury at our branch in the Dubai Mall.",
    "Our London branch in Mayfair combines heritage with modern elegance.",
    "Explore timeless sophistication in our Hong Kong branch at Central.",
    "Find the perfect timepiece at our Sydney branch in the Opera House precinct.",
    "Modern design meets luxury at our Berlin branch in Kurfürstendamm.",
    "Experience elegance and precision at our Marina Bay Sands branch in Singapore.",
    "Find the perfect timepiece at our Bayview street branch in downtown Miami.",
  ];

  return (
  <>
  <Header openSidebar={() => setSidebarOpen(true)} />
  <Navbar />

    {/* Mobile Header */}
    <header className="mobile-header">
                {/* <h1>HEXA VISION</h1> */}
                <span
                    className="mobile-menu-icon"
                    onClick={() => openSidebar()}
                >
                    &#9776;
                </span>
            </header>

            {/* Sidebar */}
            <div id="sidebar" className="sidebar">
                <span className="close-btn" onClick={() => closeSidebar()}>
                    &times;
                </span>
                <a href="/">THE HOUSE</a>
                <a href="/collections">HIGH JEWELRY</a>
                <a href="/engagement">ENGAGEMENT & BRIDAL</a>
                <a href="/watches">WATCHES</a>
                <a href="/services">SERVICES</a>
            </div>

   <div className="main-content">
      <div className="image-section">
        <LazyImage src="AmirAlipour-images/0-hero.jpg" alt="Hexa Vision Watch" />
      </div>
      <div className="text-section">
        <h1>Watches</h1>
        <p>
          Time has many different facets and the House of Hexa Vision
          reinterprets it in the most unique ways. From delightful to
          surprising, timeless to modern, Hexa Vision's exceptional timepieces
          combine the House's watch-making prowess with its gem-setting
          expertise, demonstrating a one-of-a-kind creativity in craftsmanship
          and design.
        </p>
      </div>

      <div className="cards-section">
        {cardData1.map((card, i) => (
          <div className="card" key={i}>
            <LazyImage src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="longevity-section slide-in">
        <div className="longevity-text">
          <h3>Longevity as a Compass</h3>
          <p>
            To perpetuate a heritage dating back from 1755 and support its
            clients with their evolving needs, Hexa Vision offers an extensive
            range of services that ensure the longevity of its timepieces.
          </p>
          <button className="discover-button">Discover</button>
        </div>
        <LazyImage src="AmirAlipour-images/3.avif" alt="Longevity" />
      </div>

      <div className="cards-section">
        {cardData2.map((card, i) => (
          <div className="card" key={i}>
            <LazyImage src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="latest-watch-section slide-in">
        <LazyImage src="AmirAlipour-images/4.JPG" alt="Latest Watch" />
        <div className="latest-watch-text">
          <h3>Latest Watch Models</h3>
          <p>
            Enter an extraordinary world of brilliance and refinement with the
            latest models unveiled by Hexa Vision.
          </p>
          <button className="discover-button">Discover</button>
        </div>
      </div>

      <div className="savoir-faire-section slide-in">
        <div className="savoir-faire-text">
          <h3>Savoir-Faire & Métiers d'Art</h3>
          <p>
            Hexa Vision reinterprets time with elegance, through exceptional
            creations that combine its watchmaking know-how with its gem-setting
            expertise.
          </p>
          <button className="discover-button">Discover</button>
        </div>
        <LazyImage src="AmirAlipour-images/5.webp" alt="Savoir-Faire" />
      </div>

      <div className="find-my-section slide-in">
        <LazyImage src="AmirAlipour-images/6.webp" alt="Find My Hexa Vision" />
        <div className="find-my-text">
          <h3>Find My Hexa Vision</h3>
          <p>
            We look forward to welcoming you to the extraordinary world of Hexa
            Vision, where our legacy becomes yours.
          </p>
          <button className="find-salon-button">Find a Salon</button>
        </div>
      </div>

      <div className="branches-section">
        <h2>Our Branches</h2>
        <div className="branches-grid">
          {branches.map((city, i) => (
            <div className="branch-item" key={i}>
              <h3>{city}</h3>
              <p className="branch-description">{descriptions[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    <Footer />
  </>
   
  );
};

export default WatchesPage;
