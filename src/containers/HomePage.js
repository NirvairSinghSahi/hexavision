import React, { useEffect, useState } from "react";
import "../NirvairSinghSahi.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function HomePage() {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) sidebar.style.width = "0";
    }
  };



  window.addEventListener("resize", handleResize);

  handleResize();

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
const openSidebar = () => {
  document.getElementById("sidebar").style.width = "250px";
};

const closeSidebar = () => {
  document.getElementById("sidebar").style.width = "0";
};


  const image = (name) => `${process.env.PUBLIC_URL}/Nirvair_Singh_Sahi_Images/${name}`;

  return (
    <>
      <Header />
      <Navbar />

            {/* Mobile Header */}
            <header className="mobile-header">
                <h1>HEXA VISION</h1>
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
      <section className="house-section">
        <div className="image-container">
          <img src={image("1-a3728410.png")} alt="The House of Hexa Vision" />
        </div>
        <div className="golden-line"></div>
        <h2>The House of Hexa Vision</h2>
        <p>
          Founded in New York City in 1932, Hexa Vision continues to set the
          standard for the ultimate in fine jewelry and high-end watchmaking.
        </p>

        {showMore && (
          <p>
            With over 90 years of legacy, the House of Hexa Vision is known for crafting pieces that blend innovation with tradition. 
            From timeless elegance to modern masterpieces, our creations speak to generations.
          </p>
        )}

        <button onClick={() => setShowMore(!showMore)} className="discover-btn">
          {showMore ? "Show Less" : "Learn More"}
        </button>

      </section>

      {[...Array(3)].map((_, i) => (
        <section className="dual-section" key={i}>
          <div className="card">
            <div className="card-image-container">
              <img src={image(["KingOfDiamonds.png", "Archives.png", "JewelertotheStars.png"][i])} alt="Card 1" />
            </div>
            <h2>{["King of Diamonds", "Rare Jewels of the World", "Jeweler to the Stars"][i]}</h2>
            <p>{["Having once owned more than one-third of the world's most famous gems, Hexa Vision was known as the 'King of Diamonds.", "Exquisite colored gemstones are one of the founding pillars of the House of Hexa Vision.", "As 'Jeweler to the Stars,' Hexa Vision has a long and storied Hollywood history."][i]}</p>
            <a href="#" className="discover-link">DISCOVER &gt;</a>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img src={image(["History.png", "RareJewelsOfTheWorld.png", "News&Events.png"][i])} alt="Card 2" />
            </div>
            <h2>{["History", "Archives", "News & Events"][i]}</h2>
            <p>{["Hexa Vision was a face of many brilliant facets, much like the rare jewels that built the life around.", "The Hexa Vision archives are an invaluable resource to preserve the legacy of the House.", "Discover the latest news and information about the House’s global events."][i]}</p>
            <a href="#" className="discover-link">DISCOVER &gt;</a>
          </div>
        </section>
      ))}

      {["herolarged_l1_house_7.png", "herolarged_l1_house_8.jpg", "herolarged_l1_house_9.png"].map((img, index) => (
        <section className="individual-section" key={img}>
          <div className="individual-image-container">
            <img src={image(img)} alt="Individual" />
          </div>
          <div className="individual-content">
            <h2>{["Our Stones", "Our Craftsmanship", "Our Design"][index]}</h2>
            <div className="golden-line"></div>
            <p>{["Even every Hexa Vision jewel begins with a diamond or colored gemstone of exceptional quality...",
                  "At Hexa Vision, craftsmanship is a deeply cherished value. Each piece is expertly created...",
                  "The House of Hexa Vision has built a legacy defined by extraordinary jewelry and timepieces..."][index]}</p>
            <a href="#" className="discover-btn">DISCOVER</a>
          </div>
        </section>
      ))}

      <section className="savoir-section">
        <div className="savoir-container">
          <div className="savoir-content">
            <h2>Savoir-Faire & Métiers d'Art</h2>
            <div className="golden-line"></div>
            <p>
              Hexa Vision Timepieces push creative bounds and underscore the
              House's commitment to only the exceptional.
            </p>
            <a href="#" className="discover-btn">DISCOVER</a>
          </div>
          <div className="savoir-image-container">
            <img src={image("sbs_l1_house_10.png")} alt="Savoir-Faire" />
          </div>
        </div>
        <div className="savoir-bottom-line">
          <span className="golden-line"></span>
          <img src={image("icon-rosette.svg")} alt="Rosette Icon" className="rosette-icon" />
          <span className="golden-line"></span>
        </div>
      </section>

      <section className="hexa-vision-section">
        <div className="hexa-vision-container">
          <div className="hexa-vision-image-container">
            <img src={image("find-my-harry-winston.png")} alt="Find My Hexa Vision" />
          </div>
          <div className="hexa-vision-content">
            <h2>Find My Hexa Vision</h2>
            <p>
              We look forward to welcoming you to the extraordinary world of Hexa
              Vision, where our legacy becomes yours.
            </p>
            <a href="#" className="discover-btn">FIND A SALON</a>
          </div>
        </div>
      </section>

      <footer className="footer">
            <div className="footer-container">
              <div className="footer-language">
                <span>Change Language</span>
                <p>ENGLISH</p>
                <div className="golden-line"></div>
              </div>
              <div className="footer-columns">
                <div className="footer-column">
                  <h3>SERVICES</h3>
                  <ul>
                    <li><a href="#">Schedule an Appointment</a></li>
                    <li><a href="#">Request Assistance</a></li>
                    <li><a href="#">Subscribe to Newsletters</a></li>
                    <li><a href="#">Explore our Catalog</a></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>CORPORATE</h3>
                  <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Philanthropy</a></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>LEGAL TERMS</h3>
                  <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Notice</a></li>
                    <li><a href="#">Supply Chain</a></li>
                    <li><a href="#">Accessibility</a></li>
                  </ul>
                </div>
                <div className="footer-social">
                  <h3>FOLLOW US</h3>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/story.php/?story_fbid=1670602513233142&id=1670578309902229&_rdr">
                      <img src={image("facebook.png")} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/hexavision_enhancement/">
                      <img src={image("instagram.png")} alt="Instagram" />
                    </a>
                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Fhexacc">
                      <img src={image("twitter.png")} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/company/joinhexa">
                      <img src={image("linkedin.png")} alt="LinkedIn" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC98o6FhZ1cfsNxGN3Cf_0bQ">
                      <img src={image("youtube.png")} alt="YouTube" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>Hexa Vision, Inc. 2024</p>
              </div>
            </div>
          </footer>

    </>
  );
}

export default HomePage;
