import React from "react";
import "../NirvairSinghSahi.css";

function HomePage() {
  const openSidebar = () => {
    document.getElementById("sidebar").style.width = "250px";
  };

  const closeSidebar = () => {
    document.getElementById("sidebar").style.width = "0";
  };

  const image = (name) => `${process.env.PUBLIC_URL}/Nirvair_Singh_Sahi_Images/${name}`;

  return (
    <>
      <header className="custom-header">
        <span className="mobile-menu-icon" onClick={openSidebar}>&#9776;</span>
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
  <path d="M20.63 0H7.198L6.17.426.427 6.14 0 7.164v28.183l.427 1.023 5.744 5.716 1.027.424H20.68l1.026-.424 5.742-5.716.428-1.023V7.164L27.45 6.14 21.708.426 20.682 0h-.052zm-.054.526l.838.343 5.592 5.568.344.832v27.97l-.344.833-5.592 5.568-.838.342H7.305l-.838-.342-5.592-5.568-.348-.833V7.27l.348-.832L6.467.87l.838-.343h13.27zm-2.3 9.382l.014-.005c.053 0 .095-.04.095-.092V9.7c0-.05-.042-.093-.095-.093h-.43V9.6h-1.275v.003h-.437c-.054 0-.095.04-.095.093v.1c0 .05.04.095.095.095l.013.005c.232 0 .42.186.42.416l.005-.018V14.2h-.005c0 .257-.17.46-.386.48h-4.5c-.206-.018-.372-.2-.386-.45V10.3a.42.42 0 0 1 .418-.391l.014-.005c.054 0 .096-.04.096-.092V9.7c0-.05-.042-.093-.096-.093h-.43V9.6h-1.274v.003H9.6c-.054 0-.095.04-.095.093v.1c0 .05.04.095.095.095l.013.005a.42.42 0 0 1 .419.416l.004-.018-.004 9.673a.42.42 0 0 1-.419.416L9.6 20.4c-.054 0-.095.04-.095.093v.1c0 .048.04.092.095.092h.436v.002h1.705c.054 0 .096-.042.096-.093v-.1c0-.053-.042-.096-.096-.096h-.014a.42.42 0 0 1-.418-.39v-4.236c.014-.218.15-.398.33-.44h4.62c.2.045.332.24.332.474l.005-.012v4.2l-.005-.02c0 .23-.187.416-.42.416l-.013.007c-.054 0-.095.04-.095.093v.1c0 .048.04.092.095.092h.437v.002h1.706c.053 0 .095-.042.095-.093v-.1c0-.053-.042-.096-.095-.096h-.014a.42.42 0 0 1-.417-.4V10.3c.01-.217.194-.4.417-.4M21.8 23.34h-1.97a.1.1 0 0 0-.096.096v.1c0 .053.046.093.096.093l.35.003h.054c.18 0 .2.057.1.327l-3.04 7.46s-.066.15-.194.15c-.115 0-.194-.123-.2-.147l-1.876-4.142 1.386-3.45s.1-.23.6-.23l.114-.002c.053 0 .095-.04.095-.096v-.1c0-.05-.042-.093-.095-.093H15.12c-.05 0-.094.044-.094.093v.1c0 .054.043.096.094.096l.35.002h.054c.182 0 .202.057.093.328l-.945 2.328c-.014.018-.036.038-.07.038s-.064-.03-.074-.048L13.43 23.83c-.13-.233-.05-.23.125-.23h.28l.2-.002c.05 0 .095-.04.095-.096v-.1c0-.05-.044-.093-.095-.093h-2.7c-.054 0-.1.044-.1.093v.1c0 .054.046.096.1.096l.114.002c.372 0 .47.242.47.242l1.975 4.307-1.362 3.348c-.035.04-.098.1-.173.1-.12 0-.175-.153-.175-.153s-.007.007-.015.02L8.4 24.116c-.087-.212-.27-.502-.096-.502h.28l.2-.002c.053 0 .098-.04.098-.096v-.1c0-.05-.045-.093-.098-.093H6.088c-.05 0-.094.044-.094.093v.1c0 .054.042.096.094.096l.116.002c.368 0 .467.242.467.242L11.93 34.3l.017.043s.034.06.088.06.1-.013.118-.06v.01l2.14-5.322 2.398 5.23.027.08s.03.058.087.058.1-.012.122-.062c.003-.005.01-.025.014-.052l4.138-10.4s.093-.23.594-.23l.114-.003c.05 0 .094-.04.094-.093v-.1c0-.05-.044-.096-.094-.096m-1.27-21.525l-.436-.002H7.36l-5.513 5.5v27.858l5.513 5.5h13.158l5.512-5.5V7.325L20.518 1.84zm4.34 32.43v.382l-4.82 4.797H7.86L3.04 34.65V7.765l4.82-4.798h12.178l4.82 4.798V34.27z" />
</svg>

          </div>
          <div className="divider-line"></div>
        </div>
      </header>

      <nav className="custom-navbar sticky-top">
        <a href="/" className="nav-link">THE HOUSE</a>
        <a href="/collections" className="nav-link">HIGH JEWELRY</a>
        <a href="/engagement" className="nav-link">ENGAGEMENT & BRIDAL</a>
        <a href="/watches" className="nav-link">WATCHES</a>
        <a href="/services" className="nav-link">SERVICES</a>
      </nav>

      <div id="sidebar" className="sidebar">
        <span className="close-btn" onClick={closeSidebar}>&times;</span>
        <a href="/">THE HOUSE</a>
        <a href="/collections">HIGH JEWELRY</a>
        <a href="/engagement">ENGAGEMENT AND BRIDAL</a>
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
          Learn more about our history, news, and global events.
        </p>
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
