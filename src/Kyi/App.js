import './App.css';
import React from 'react';

function App() {
  return (
    <>
      {/* Header */}
      <header className="custom-header">
        <span className="mobile-menu-icon" onClick={() => console.log('Sidebar Opened')}>&#9776;</span>
        <h1>HEXA-VISION</h1>
        <div className="divider-container">
          <div className="divider-line" />
          <div className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 28 43" fillRule="evenodd">
              <path d="M20.63 0H7.198L6.17.426... (cut for brevity)" />
            </svg>
          </div>
          <div className="divider-line" />
        </div>
      </header>

      {/* Navbar */}
      <nav className="custom-navbar">
        <a href="#" className="nav-link">THE HOUSE</a>
        <a href="#" className="nav-link">HIGH JEWELRY</a>
        <a href="#" className="nav-link">ENGAGEMENT & BRIDAL</a>
        <a href="#" className="nav-link">WATCHES</a>
        <a href="#" className="nav-link">ACCESSORIES</a>
        <a href="#" className="nav-link">SERVICES</a>
      </nav>

      {/* Hero Section */}
      <section id="engagement">
        <div className="hero"></div>
        <div className="hero-content">
          <h1>Engagement & Bridal</h1>
          <p>Discover timeless elegance with Hexa Vision's exquisite bridal collection.</p>
          <a href="#engagement" className="cta-button">Explore Collection</a>
        </div>
      </section>

      {/* Engagement and Wedding Bands */}
      <section id="engagement" className="section">
        <h2>Engagement & Wedding Bands</h2>
        <p>Celebrate your love with Hexa Vision's exquisite collection of engagement and wedding bands...</p>
        <div className="cards big-cards">
          <div className="card">
            <img src="/Khant_images/ring.avif" alt="Engagement Rings" />
            <h3>Engagement Rings</h3>
            <p>Celebrate love with timeless beauty and sparkle.</p>
            <a href="#engagement-rings">Discover</a>
          </div>
          <div className="card">
            <img src="/Khant_images/band.avif" alt="Wedding Bands" />
            <h3>Wedding Bands</h3>
            <p>Symbolize everlasting commitment with stunning bands.</p>
            <a href="#wedding-bands">Discover</a>
          </div>
          <div className="card">
            <img src="/Khant_images/wedding day.webp" alt="Diamond Collection" />
            <h3>Diamond Collection</h3>
            <p>Unparalleled brilliance for your special moments.</p>
            <a href="#diamond">Explore</a>
          </div>
          <div className="card">
            <img src="/Khant_images/turquoise.avif" alt="Emerald Bands" />
            <h3>Emerald Bands</h3>
            <p>Timeless elegance crafted to perfection.</p>
            <a href="#emerald">View</a>
          </div>
        </div>
      </section>

      {/* Wedding Day Jewels Section */}
      <section id="wedding-day-jewels" className="section wedding-day-jewels-section">
        <div className="jewels-title">
          <h2>Wedding Day Jewels</h2>
          <p>Make your wedding day unforgettable with Hexa Vision's stunning bridal jewelry.</p>
        </div>
        <div className="jewels-content">
          <div className="jewel-card">
            <img src="/Khant_images/hand.png" alt="Bridal Jewels" className="jewel-image" />
            <div className="jewel-details">
              <h3>Bridal Jewels</h3>
              <p>Necklaces, earrings, and bracelets crafted to perfection.</p>
              <a href="#bridal-jewels" className="cta-button">Learn More</a>
            </div>
          </div>
          <div className="jewel-card">
            <img src="/Khant_images/last.webp" alt="Tiara Collection" className="jewel-image" />
            <div className="jewel-details">
              <h3>Tiara Collection</h3>
              <p>Grace and luxury for your special day.</p>
              <a href="#tiara-collection" className="cta-button">Discover</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Guide */}
      <section id="guide" className="section bridal-guide-section">
        <div className="guide-image">
          <img src="/Khant_images/couple.png" alt="Bridal Guide" />
        </div>
        <div className="guide-text">
          <h2>The Hexa Vision Bridal Guide</h2>
          <p>
            Not sure where to begin? From choosing the perfect engagement ring to matching your wedding day accessories,
            our guide is a step-by-step resource for creating your dream bridal look.
          </p>
          <a href="#guide-details">Explore the Guide</a>
        </div>
      </section>

      {/* Find a Salon */}
      <section id="contact" className="section find-salon">
        <div className="find-salon-text">
          <h2>Find My Hexa Vision Salon</h2>
          <p>
            Your journey to the perfect piece begins here. Whether in-store or virtual, our stylists are ready.
          </p>
          <a href="#locations" className="button">Find a Salon</a>
        </div>
        <div className="store-img">
          <img src="/Khant_images/shop.webp" alt="Hexa Vision Store" />
        </div>
      </section>
    </>
  );
}

export default App;
