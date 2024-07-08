import React from "react";

const Testimonial = ({ img, name, designation, testimonial, rating }) => {
  return (
    <div>
      <div className="flex">
        <div>
          <img src={img} alt={name} />
        </div>
        <div>
          <div>{name}</div>
          <div>{designation}</div>
        </div>
      </div>
      <div>{testimonial}</div>
      <div>{rating}</div>
    </div>
  );
};

export default Testimonial;
