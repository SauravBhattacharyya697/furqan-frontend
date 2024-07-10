import React from "react";
import { RIGHTARROW } from "../../utils/images";


const BottomHighlight = () => {
  return (
    <div className="ai-power-platform">
      <div className="main-header">
        <h2>
          Our <span className="gradientText">AI-powered platform</span> analyzes your interests, skills, and aspirations
          to suggest the best career options.
        </h2>
        <p>
          Whether you’re a student or a professional, find the right path and the
          skills you need to succeed.
        </p>
        <button type="button" className="defaultButton">Get Started <img src={RIGHTARROW} alt="rightarrow" /> </button>
      </div>
    </div>
  );
};

export default BottomHighlight;
