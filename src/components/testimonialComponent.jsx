import React from "react";
import Testimonial from "./testimonial/testimonial";
import { Testimonials } from "../utils/testimonialContent";
import { FRAME } from "../utils/images";

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
      <div>
        <div>
          <img src={FRAME} alt="frame" />
        </div>
        <div>We keep your personal online data private, safe, and secure.</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
