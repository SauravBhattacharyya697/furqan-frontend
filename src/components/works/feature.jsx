import React from "react";

const Feature = ({ imgSrc, title, text }) => {
  return (
    <div>
      <div className="feature-items">
        <div className="feature-item-thumb">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="feature-item-cntn">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
