import React from "react";

const Feature = ({ imgSrc, title, text }) => {
  return (
    <div>
      <div className="flex">
        <div>
          <img src={imgSrc} alt={title} />
        </div>
        <div>
          <div>{title}</div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
