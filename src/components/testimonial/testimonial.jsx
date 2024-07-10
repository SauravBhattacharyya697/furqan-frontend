import React from "react";
import StarIcon from '@mui/icons-material/Star';

const Testimonial = ({ img, name, designation, testimonial, rating }) => {
  console.log(testimonial);
  return (
    <div className="testimonial-item-inner">
      <div className="testimonial-top">
        <div className="testimonial-thumb">
          <img src={img} alt={name} />
        </div>
        <div className="testimonial-cntn">
          <h4>{name}</h4>
          <p>{designation}</p>
        </div>
      </div>
      <p className="testimonial-pera">{testimonial}</p>
      <ul className="client-rating">
        <li><StarIcon/></li>
        <li><StarIcon/></li>
        <li><StarIcon/></li>
        <li><StarIcon/></li>
        <li><StarIcon/></li>
      </ul>
      {/* <div>{rating}</div> */}
    </div>
  );
};

export default Testimonial;
