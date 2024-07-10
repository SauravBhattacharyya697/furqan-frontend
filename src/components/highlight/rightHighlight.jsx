import React from "react";
import { BANNERUSERONE } from "../../utils/images";
import { BANNERUSERTWO } from "../../utils/images";
import { BANNERUSERSTHREE } from "../../utils/images";
import { BANNERUSERS } from "../../utils/images";
import { BANNERUSERSBG } from "../../utils/images";



const RightHighlight = () => {
  return (
    <div className="banner-right-thumb">
      <div className="baner-right-thumb-main">
          <img src={BANNERUSERONE} alt="banneruser" className="banner-user-one" />
          <div className="baner-right-iner">
            <img src={BANNERUSERTWO} alt="banneruser" className="banner-user-two" />
            <img src={BANNERUSERSTHREE} alt="banneruser" className="banner-user-three" />
          </div>
      </div>
      <div className="career-coach">
        <h5>20+ Career Coaches</h5>
        <img src={BANNERUSERS} alt="banner users" />
      </div>
      <img src={BANNERUSERSBG} alt="banner background" className="banner-Thumb-Bg"/>
    </div>
  );
};

export default RightHighlight;
