import React from "react";
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  FACEBOOK,
  FOOTERLOGO,
  INSTAGRAM,
  LINKEDIN,
  TWITTER,
} from "../utils/images";
import { NAVBAR_MENU } from "../utils/navbarContent";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer-upper">
          <div className="footer-upper-inner">
            <div className="footer-logo">
              <img src={FOOTERLOGO} alt="footer logo" />
            </div>
            <div className="footer-pera-first">
              With <span>Educationist.ai</span>, get personalized career guidance to make
              informed decisions about your future.
            </div>
          </div>
          <div className="footer-upper-inner">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Content</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-upper-inner">
            <h4>Contact Information</h4>
            <p><a href="#">support@educationist.ai</a></p>
            <p><a href="#">+1 (800) 123-4567</a></p>
            <p>123 Educationist.ai St, Suite 100, Education City, Country</p>
          </div>
          <div className="footer-upper-inner">
            <h4>Social Media</h4>
            <div className="ftr-social-link">
              <img src={FACEBOOK} alt="facebook" />
              <img src={LINKEDIN} alt="linkedin" />
              <img src={TWITTER} alt="twitter" />
              <img src={INSTAGRAM} alt="instagram" />
            </div>
            <h4>Subscribe</h4>
            <div className="subscribe-main">
              <input type="text" placeholder="Your Email Address" />
              <button type="button" className="ftr-mailBtn"><ArrowForwardIcon/></button>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy;{currentYear} Educationist.ai . All rights reserved.</p>
          <div className="foter-list">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
