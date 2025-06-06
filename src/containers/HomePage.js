import React, { useEffect, useState } from "react";
import "../NirvairSinghSahi.css";
import placekit from "@placekit/client-js";
import Header from "../components/Header";
import LazyImage from "../components/LazyImage";
import Navbar from "../components/Navbar";

function HomePage() {
  const [showMore, setShowMore] = useState(false);
  const [jewelryItems, setJewelryItems] = useState([]);
  const [loadingJewelry, setLoadingJewelry] = useState(false);
  const [showJewelry, setShowJewelry] = useState(false);
  const [designArt, setDesignArt] = useState([]);
  const [loadingDesign, setLoadingDesign] = useState(false);
  const [showDesignArt, setShowDesignArt] = useState(false);
  const [showSalonSearch, setShowSalonSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [nearbySalons, setNearbySalons] = useState([]);
  const [activeCards, setActiveCards] = useState([]);
  const [cardContent, setCardContent] = useState({});
  const [loadingCard, setLoadingCard] = useState(false);

  const pk = placekit("pk_k0NDqBAbNtU7Jg/mOtHCZwb/jbw/ZvvLuXFQmPGjT60=");
  const handleAddressInput = async (value) => {
    setSelectedAddress(value);
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const results = await pk.search(value);
      setSuggestions(results);
    } catch (err) {
      console.error("Autocomplete error:", err);
    }
  };

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

  const image = (name) =>
    `${process.env.PUBLIC_URL}/Nirvair_Singh_Sahi_Images/${name}`;
  const fetchJewelryData = async () => {
    setLoadingJewelry(true);
    setShowJewelry(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const data = await response.json();
      setJewelryItems(data);
    } catch (error) {
      console.error("Error fetching jewelry:", error);
    } finally {
      setLoadingJewelry(false);
    }
  };
  const fetchDesignArt = async () => {
    setLoadingDesign(true);
    try {
      const response = await fetch(
        "https://api.artic.edu/api/v1/artworks/search?q=jewelry&limit=5&fields=id,title,image_id,artist_display"
      );
      const data = await response.json();

      const artworks = data.data
        .filter((art) => art.image_id) // Only include items with images
        .map((art) => ({
          id: art.id,
          title: art.title,
          image: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
          artist: art.artist_display,
        }));

      setDesignArt(artworks);
    } catch (error) {
      console.error("Error fetching art data:", error);
    } finally {
      setLoadingDesign(false);
      setShowDesignArt(true);
    }
  };
  const handleDiscoverClick = async (index) => {
    if (activeCards.includes(index)) {
      setActiveCards(activeCards.filter((i) => i !== index)); // Remove from active list
      return;
    }
    setActiveCards([...activeCards, index]); // Add to active list

    setLoadingCard(true);

    try {
      let data = [];

      if (index === 0) {
        const res = await fetch(
          "https://corsproxy.io/?https://api.openverse.engineering/v1/images?q=jewelry&license_type=commercial&extension=jpg&format=json"
        );
        const result = await res.json();
        data = result.results.slice(0, 1); // 1 item for now
        console.log("Fetched Openverse data:", data);
      }

      if (index === 1) {
        const res = await fetch(
          "https://en.wikipedia.org/api/rest_v1/page/summary/History_of_jewellery"
        );
        const result = await res.json();
        console.log("Wikipedia Result:", result);

        data = [
          {
            id: result.pageid || "wiki",
            title: result.title || "Not found.",
            text: result.extract || "No summary available.",
            url: result.content_urls?.desktop?.page || "#",
          },
        ];
      }

      if (index === 2) {
        const res = await fetch(
          "https://api.artic.edu/api/v1/artworks/search?q=jewel&limit=1&fields=id,title,image_id"
        );
        const result = await res.json();

        if (result.data && result.data.length > 0) {
          const item = result.data[0];
          const imageUrl = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;

          data = [
            {
              id: item.id,
              title: item.title,
              image: imageUrl,
              url: `https://www.artic.edu/artworks/${item.id}`,
            },
          ];
        } else {
          data = [
            {
              id: "no-result",
              title: "No artwork found.",
              image: "",
              url: "#",
            },
          ];
        }
      }

      if (index === 3) {
        data = [
          {
            id: "mock-quote-001",
            title: "William Faulkner",
            text: "The past is not dead. It is not even past.",
            url: "https://quotable.io/quotes/mock-quote-001",
          },
        ];
      }

      if (index === 4) {
        const res = await fetch("https://randomuser.me/api/");
        const result = await res.json();
        const person = result.results[0];

        const jewels = [
          "emerald necklace",
          "diamond tiara",
          "sapphire bracelet",
          "ruby-studded earrings",
          "vintage brooch",
          "platinum ring",
          "custom gold anklet",
        ];
        const randomJewel = jewels[Math.floor(Math.random() * jewels.length)];

        data = [
          {
            id: person.login.uuid,
            title: `${person.name.first} ${person.name.last}`,
            image: person.picture.large,
            text: `Spotted wearing a ${randomJewel} at an international gala in ${person.location.country}.`,
            url: `https://randomuser.me/`,
          },
        ];
      }

      if (index === 5) {
        const res = await fetch(
          "https://baconipsum.com/api/?type=meat-and-filler&sentences=1"
        );
        const result = await res.json();

        const fakeHeadline = result[0];

        data = [
          {
            id: "press-release-001",
            title: "Hexa Vision Announces New High Jewelry Collection",
            text: fakeHeadline,
            url: "https://hexavision.com/press/new-collection-launch",
          },
        ];
      }

      setCardContent((prev) => ({
        ...prev,
        [index]: data,
      }));
    } catch (err) {
      console.error("Error fetching Openverse data:", err);
    } finally {
      setLoadingCard(false);
    }
  };

  const simulateNearbySalons = (address) => {
    const dummySalons = [
      {
        name: "Hexa Beauty Lounge",
        address: `${address}, Suite 101`,
        phone: "416-555-1234",
      },
      {
        name: "Golden Touch Salon",
        address: `${address}, 2nd Floor`,
        phone: "416-555-5678",
      },
      {
        name: "Elite Hair & Spa",
        address: `${address}, Unit B`,
        phone: "416-555-9101",
      },
    ];
    setNearbySalons(dummySalons);
  };

  return (
    <>
      <Header />
      <Navbar />

      {/* Mobile Header */}
      <header className="mobile-header">
        <h1>HEXA VISION</h1>
        <span className="mobile-menu-icon" onClick={() => openSidebar()}>
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
          <LazyImage
            src={image("1-a3728410.png")}
            alt="The House of Hexa Vision"
          />
        </div>
        <div className="golden-line"></div>
        <h2>The House of Hexa Vision</h2>
        <p>
          Founded in New York City in 1932, Hexa Vision continues to set the
          standard for the ultimate in fine jewelry and high-end watchmaking.
        </p>

        {showMore && (
          <p>
            With over 90 years of legacy, the House of Hexa Vision is known for
            crafting pieces that blend innovation with tradition. From timeless
            elegance to modern masterpieces, our creations speak to generations.
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
              <LazyImage
                src={image(
                  [
                    "KingOfDiamonds.png",
                    "Archives.png",
                    "JewelertotheStars.png",
                  ][i]
                )}
                alt="Card 1"
              />
            </div>
            <h2>
              {
                [
                  "King of Diamonds",
                  "Rare Jewels of the World",
                  "Jeweler to the Stars",
                ][i]
              }
            </h2>
            <p>
              {
                [
                  "Having once owned more than one-third of the world's most famous gems, Hexa Vision was known as the 'King of Diamonds.",
                  "Exquisite colored gemstones are one of the founding pillars of the House of Hexa Vision.",
                  "As 'Jeweler to the Stars,' Hexa Vision has a long and storied Hollywood history.",
                ][i]
              }
            </p>
            <a
              href="#"
              className="discover-link"
              onClick={(e) => {
                e.preventDefault();
                handleDiscoverClick(i * 2); // unique index
              }}
            >
              {activeCards.includes(i * 2) ? "HIDE" : "DISCOVER"} &gt;
            </a>

            {activeCards.includes(i * 2) && cardContent[i * 2] && (
              <div className="card-extra-info">
                {cardContent[i * 2].map((item) => (
                  <div key={item.id}>
                    {/* Card 0 - King of Diamonds (Openverse) */}
                    {i * 2 === 0 && (
                      <>
                        <img
                          src={item.thumbnail || item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            borderRadius: "8px",
                            marginBottom: "10px",
                          }}
                        />
                        <h4>{item.title}</h4>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          View Original
                        </a>
                      </>
                    )}

                    {/* Card 2 - Rare Jewels (Art Institute) */}
                    {i * 2 === 2 && (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            borderRadius: "8px",
                            marginBottom: "10px",
                          }}
                        />
                        <h4>{item.title}</h4>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          View on Art Institute
                        </a>
                      </>
                    )}

                    {/* Card 4 - Jeweler to the Stars (Celebrity) */}
                    {i * 2 === 4 && (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            borderRadius: "8px",
                            marginBottom: "10px",
                          }}
                        />
                        <h4 style={{ fontWeight: "bold", marginBottom: "5px" }}>
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontStyle: "italic",
                            color: "#555",
                            marginBottom: "8px",
                          }}
                        >
                          {item.text}
                        </p>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          View Profile
                        </a>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card">
            <div className="card-image-container">
              <LazyImage
                src={image(
                  [
                    "History.png",
                    "RareJewelsOfTheWorld.png",
                    "News&Events.png",
                  ][i]
                )}
                alt="Card 2"
              />
            </div>
            <h2>{["History", "Archives", "News & Events"][i]}</h2>
            <p>
              {
                [
                  "Hexa Vision was a face of many brilliant facets, much like the rare jewels that built the life around.",
                  "The Hexa Vision archives are an invaluable resource to preserve the legacy of the House.",
                  "Discover the latest news and information about the House’s global events.",
                ][i]
              }
            </p>
            <a
              href="#"
              className="discover-link"
              onClick={(e) => {
                e.preventDefault();
                handleDiscoverClick(i * 2 + 1); // right-side card
              }}
            >
              {activeCards.includes(i * 2 + 1) ? "HIDE" : "DISCOVER"} &gt;
            </a>

            {activeCards.includes(i * 2 + 1) && loadingCard && (
              <p>Loading...</p>
            )}

            {activeCards.includes(i * 2 + 1) && cardContent[i * 2 + 1] && (
              <div className="card-extra-info">
                {cardContent[i * 2 + 1].map((item) => (
                  <div key={item.id}>
                    <h4 style={{ fontWeight: "bold", marginBottom: "5px" }}>
                      {item.title}
                    </h4>
                    <p style={{ color: "#444", marginBottom: "8px" }}>
                      {item.text}
                    </p>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {[
        "herolarged_l1_house_7.png",
        "herolarged_l1_house_8.jpg",
        "herolarged_l1_house_9.png",
      ].map((img, index) => (
        <section className="individual-section" key={img}>
          <div className="individual-image-container">
            <LazyImage src={image(img)} alt="Individual" />
          </div>
          <div className="individual-content">
            <h2>{["Our Stones", "Our Craftsmanship", "Our Design"][index]}</h2>
            <div className="golden-line"></div>
            <p>
              {
                [
                  "Even every Hexa Vision jewel begins with a diamond or colored gemstone of exceptional quality...",
                  "At Hexa Vision, craftsmanship is a deeply cherished value. Each piece is expertly created...",
                  "The House of Hexa Vision has built a legacy defined by extraordinary jewelry and timepieces...",
                ][index]
              }
            </p>
            {index === 2 && (
              <button
                className="discover-btn"
                onClick={() => {
                  if (showDesignArt) {
                    setShowDesignArt(false);
                  } else {
                    fetchDesignArt();
                  }
                }}
              >
                {showDesignArt ? "Hide Art" : "DISCOVER"}
              </button>
            )}

            {loadingDesign && <div className="loader"></div>}

            {index === 2 && showDesignArt && (
              <div className="art-grid">
                {designArt.map((item) => (
                  <div key={item.id} className="art-card">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                    <h4>{item.title}</h4>
                    <p style={{ fontSize: "14px", color: "#555" }}>
                      {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            )}
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
            <button
              onClick={() => {
                if (showJewelry) {
                  setShowJewelry(false); // hide
                } else {
                  fetchJewelryData(); // fetch + show
                }
              }}
              className="discover-btn"
            >
              {showJewelry ? "Hide Collection" : "DISCOVER"}
            </button>

            {loadingJewelry && <p>Loading jewelry...</p>}

            {showJewelry && jewelryItems.length > 0 && (
              <div className="jewelry-grid">
                {jewelryItems.map((item) => (
                  <div key={item.id} className="jewelry-card">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      style={{ width: "150px" }}
                    />
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="savoir-image-container">
            <LazyImage src={image("sbs_l1_house_10.png")} alt="Savoir-Faire" />
          </div>
        </div>
        <div className="savoir-bottom-line">
          <span className="golden-line"></span>
          <LazyImage
            src={image("icon-rosette.svg")}
            alt="Rosette Icon"
            className="rosette-icon"
          />
          <span className="golden-line"></span>
        </div>
      </section>

      <section className="hexa-vision-section">
        <div className="hexa-vision-container">
          <div className="hexa-vision-image-container">
            <LazyImage
              src={image("find-my-harry-winston.png")}
              alt="Find My Hexa Vision"
            />
          </div>
          <div className="hexa-vision-content">
            <h2>Find My Hexa Vision</h2>
            <p>
              We look forward to welcoming you to the extraordinary world of
              Hexa Vision, where our legacy becomes yours.
            </p>
            <button
              className="discover-btn"
              onClick={() => setShowSalonSearch(!showSalonSearch)}
            >
              {showSalonSearch ? "Hide Search" : "FIND A SALON"}
            </button>
            {showSalonSearch && (
              <div className="salon-search">
                <input
                  type="text"
                  placeholder="Enter your address..."
                  value={selectedAddress}
                  onChange={(e) => handleAddressInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (suggestions.length > 0) {
                        const first = suggestions[0];
                        setSelectedAddress(first.label);
                        setSuggestions([]);
                        simulateNearbySalons(first.label);
                      } else if (selectedAddress.trim() !== "") {
                        simulateNearbySalons(selectedAddress);
                      }
                    }
                  }}
                />
                {suggestions.length > 0 && (
                  <ul className="suggestion-list">
                    {suggestions.map((sugg) => (
                      <li
                        key={sugg.id}
                        onClick={() => {
                          setSelectedAddress(sugg.label);
                          setSuggestions([]);
                          simulateNearbySalons(sugg.label);
                        }}
                      >
                        {sugg.label}
                      </li>
                    ))}
                  </ul>
                )}
                {nearbySalons.length > 0 && (
                  <div className="salon-results">
                    <h4>Nearby Salons:</h4>
                    <ul>
                      {nearbySalons.map((salon, index) => (
                        <li key={index}>
                          <strong>{salon.name}</strong>
                          <br />
                          {salon.address}
                          <br />
                          <em>{salon.phone}</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
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
                <li>
                  <a href="#">Schedule an Appointment</a>
                </li>
                <li>
                  <a href="#">Request Assistance</a>
                </li>
                <li>
                  <a href="#">Subscribe to Newsletters</a>
                </li>
                <li>
                  <a href="#">Explore our Catalog</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>CORPORATE</h3>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Philanthropy</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>LEGAL TERMS</h3>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Notice</a>
                </li>
                <li>
                  <a href="#">Supply Chain</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <h3>FOLLOW US</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/story.php/?story_fbid=1670602513233142&id=1670578309902229&_rdr">
                  <LazyImage src={image("facebook.png")} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/hexavision_enhancement/">
                  <LazyImage src={image("instagram.png")} alt="Instagram" />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fhexacc">
                  <LazyImage src={image("twitter.png")} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/company/joinhexa">
                  <LazyImage src={image("linkedin.png")} alt="LinkedIn" />
                </a>
                <a href="https://www.youtube.com/channel/UC98o6FhZ1cfsNxGN3Cf_0bQ">
                  <LazyImage src={image("youtube.png")} alt="YouTube" />
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
