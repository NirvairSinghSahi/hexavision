import React, { useEffect, useState } from "react";

const InspiredGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const newPhotos = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      url: `https://picsum.photos/500/400?random=${
        i + Math.floor(Math.random() * 1000)
      }`,
    }));
    setPhotos(newPhotos);
  }, []);

  return (
    <section className="collections">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Inspired by Elegance
      </h2>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "40px" }}>
        Curated inspirations from timeless elegance and natural beauty.
      </p>
      <div className="sub-collections">
        {photos.map((photo) => (
          <div className="sub-collection-item" key={photo.id}>
            <img src={photo.url} alt="Elegant Inspiration" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspiredGallery;
