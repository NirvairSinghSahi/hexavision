import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import '../BridalPage.css';

function BridalPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header openSidebar={() => setSidebarOpen(true)} />
      <Navbar />
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      <section id="engagement">
        <div className="hero"></div>
        <div className="hero-content">
          <h1>Engagement & Bridal</h1>
          <p>Discover timeless elegance with Hexa Vision's exquisite bridal collection.</p>
          <a href="#engagement" className="cta-button">Explore Collection</a>
        </div>
      </section>

      <section id="engagement" className="section">
        <h2>Engagement & Wedding Bands</h2>
        <p>Celebrate your love with Hexa Vision's exquisite collection of engagement and wedding bands...</p>
        <div className="cards big-cards">
          {[
            { src: "Khant_images/ring.avif", title: "Engagement Rings", text: "Celebrate love with timeless beauty and sparkle.", href: "#engagement-rings" },
            { src: "Khant_images/band.avif", title: "Wedding Bands", text: "Symbolize everlasting commitment with stunning bands.", href: "#wedding-bands" },
            { src: "Khant_images/wedding day.webp", title: "Diamond Collection", text: "Unparalleled brilliance for your special moments.", href: "#diamond" },
            { src: "Khant_images/turquoise.avif", title: "Emerald Bands", text: "Timeless elegance crafted to perfection.", href: "#emerald" }
          ].map((item, idx) => (
            <div className="card" key={idx}>
              <img src={item.src} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.href}>Discover</a>
            </div>
          ))}
        </div>
      </section>

      <section id="wedding-day-jewels" className="section wedding-day-jewels-section">
        <div className="jewels-title">
          <h2>Wedding Day Jewels</h2>
          <p>Make your wedding day unforgettable with Hexa Vision's stunning bridal jewelry.</p>
        </div>
        <div className="jewels-content">
          <div className="jewel-card">
            <img src="Khant_images/hand.png" alt="Bridal Jewels" className="jewel-image" />
            <div className="jewel-details">
              <h3>Bridal Jewels</h3>
              <p>Necklaces, earrings, and bracelets crafted to perfection.</p>
              <a href="#bridal-jewels" className="cta-button">Learn More</a>
            </div>
          </div>
          <div className="jewel-card">
            <img src="Khant_images/last.webp" alt="Tiara Collection" className="jewel-image" />
            <div className="jewel-details">
              <h3>Tiara Collection</h3>
              <p>Grace and luxury for your special day.</p>
              <a href="#tiara-collection" className="cta-button">Discover</a>
            </div>
          </div>
        </div>
      </section>

      <section id="guide" className="section bridal-guide-section">
        <div className="guide-image">
          <img src="Khant_images/couple.png" alt="Bridal Guide" />
        </div>
        <div className="guide-text">
          <h2>The Hexa Vision Bridal Guide</h2>
          <p>Not sure where to begin? The Hexa Vision Bridal Guide is here to help!...</p>
          <a href="#guide-details">Explore the Guide</a>
        </div>
      </section>

      <section id="contact" className="section find-salon">
        <div className="find-salon-text">
          <h2>Find My Hexa Vision Salon</h2>
          <p>Your journey to the perfect piece begins here...</p>
          <a href="#locations" className="button">Find a Salon</a>
        </div>
        <div className="store-img">
          <img src="Khant_images/shop.webp" alt="Hexa Vision Store" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BridalPage;