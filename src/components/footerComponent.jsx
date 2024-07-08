import React from "react";
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
    <footer>
      <div className="flex justify-between">
        <div>
          <div>
            <img src={FOOTERLOGO} alt="footer logo" />
          </div>
          <div>
            With Educationist.ai, get personalized career guidance to make
            informed decisions about your future.
          </div>
        </div>
        <div>
          <div>Quick Links</div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Content</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <div>Contact Information</div>
          <div>support@educationist.ai</div>
          <div>+1 (800) 123-4567</div>
          <div>123 Educationist.ai St, Suite 100, Education City, Country</div>
        </div>
        <div>
          <div>Social Media</div>
          <div className="flex">
            <img src={FACEBOOK} alt="facebook" />
            <img src={LINKEDIN} alt="linkedin" />
            <img src={TWITTER} alt="twitter" />
            <img src={INSTAGRAM} alt="instagram" />
          </div>
          <div>Subscribe</div>
          <div>
            <input type="text" placeholder="Your Email Address" />
            <button type="button"></button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>&copy;{currentYear} Educationist.ai . All rights reserved.</div>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
