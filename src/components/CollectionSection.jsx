import React from "react";
import LazyImage from "./LazyImage";

const CollectionSection = ({ title, img, desc, subsOnly, subs }) => (
  <section className="collections">
    {!subsOnly && (
      <div className="collection">
        <LazyImage src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>DISCOVER</button>
      </div>
    )}
    {subs?.length > 0 && (
      <div className="sub-collections">
        {subs.map((sub, i) => (
          <div className="sub-collection-item" key={i}>
            <LazyImage src={sub.img} alt={sub.title} />
            <h3>{sub.title}</h3>
            <p>{sub.desc}</p>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default CollectionSection;
