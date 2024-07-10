import React from "react";
import Testimonial from "./testimonial/testimonial";
import { Testimonials } from "../utils/testimonialContent";
import { FRAME } from "../utils/images";
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ content, author }) => (
  <div>
    <p>{content}</p>
    <p>- {author}</p>
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};



const TestimonialComponent = () => {
  return (
    <div className="separate-devider">
      <Container>
      <div className="client-testimonial">
        <div className="main-header">
          <span className="roundText">Testimonials</span>
          <h2>What Our <span className="gradientText">Users Say</span></h2>
        </div>     

        <div className="testimonial-main">
        <Slider {...settings}>
          {Testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                img={testimonial.imgSrc}
                name={testimonial.name}
                designation={testimonial.designation}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
        </Slider>
        </div>
      </div>

      <div className="get-started">
        <div className="get-start-left">
          <h2>Start Your Journey Today</h2>
          <p>Sign up now to unlock your future with Educationist.ai</p>
        </div>
        <div className="get-start-rgt">
          <button type="button" className="defaultButton-White">Get Started for Free</button>
        </div>
      </div>
      <div className="online-data-private">
        <div className="data-private-thumb">
          <img src={FRAME} alt="frame" />
        </div>
        <h2>We keep your <span className="gradientText">personal online data private, safe, and secure.</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      </Container>
    </div>
  );
};

export default TestimonialComponent;
