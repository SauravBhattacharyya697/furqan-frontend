import React from "react";
import Testimonial from "./testimonial/testimonial";
import { Testimonials } from "../utils/testimonialContent";

const TestimonialComponent = () => {
  return (
    <div>
      <div>Testimonials</div>
      <div>What Our Users Say</div>
      <div className="flex">
        {Testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            img={testimonial.imgSrc}
            name={testimonial.name}
            designation={testimonial.designation}
            rating={testimonial.rating}
          />
        ))}
      </div>
      <div className="flex">
        <div>
          <div>Start Your Journey Today</div>
          <div>Sign up now to unlock your future with Educationist.ai</div>
        </div>
        <div>
          <button type="button">Get Started for Free</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TestimonialComponent;
