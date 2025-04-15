import React from "react";
import LazyImage from "./LazyImage";

const FindMyHexa = () => (
  <section className="find-my-hexa">
    <div className="find-my-hexa-content">
      <LazyImage src="/meteimages/image 33.png" alt="Hexa Vision Salon" />
      <div className="find-my-hexa-text">
        <h2>Find My Hexa Vision</h2>
        <p>
          We look forward to welcoming you to the extraordinary world of Hexa
          Vision, where our legacy becomes yours.
        </p>
        <button>FIND A SALON</button>
      </div>
    </div>
  </section>
);

export default FindMyHexa;
