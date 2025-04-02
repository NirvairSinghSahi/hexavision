import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-language">
        <span>Change Language</span>
        <p>ENGLISH</p>
        <div className="golden-line"></div>
      </div>

      <div className="footer-columns">
        {[
          {
            title: "SERVICES",
            links: [
              "Schedule an Appointment",
              "Request Assistance",
              "Subscribe to Newsletters",
              "Explore our Catalog",
            ],
          },
          {
            title: "CORPORATE",
            links: ["Careers", "Philanthropy"],
          },
          {
            title: "LEGAL TERMS",
            links: [
              "Terms of Use",
              "Privacy Policy",
              "Cookie Notice",
              "Supply Chain",
              "Accessibility",
            ],
          },
        ].map((col, index) => (
          <div className="footer-column" key={index}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-social">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            {[
              "facebook",
              "instagram",
              "twitter",
              "pinterest",
              "linkedin",
              "youtube",
            ].map((platform, i) => (
              <a href="#" key={i}>
                <img src={`/meteimages/${platform}.png`} alt={platform} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Hexa Vision, Inc. 2024</p>
      </div>
    </div>
  </footer>
);

export default Footer;
