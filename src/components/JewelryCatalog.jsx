import React, { useEffect, useState } from "react";
import LazyImage from "./LazyImage";

const JewelryCatalog = () => {
  const [jewelry, setJewelry] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        if (!res.ok) throw new Error("Failed to fetch jewelry data.");
        const data = await res.json();
        setJewelry(data);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while loading jewelry items.");
      }
    };

    fetchJewelry();
  }, []);

  return (
    <section className="collections">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Curated Jewelry Collection
      </h2>
      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : (
        <div className="sub-collections">
          {jewelry.map((item) => (
            <div className="jewelry-card" key={item.id}>
              <LazyImage src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="jewelry-desc">{item.description}</p>
              <p className="jewelry-price">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default JewelryCatalog;
