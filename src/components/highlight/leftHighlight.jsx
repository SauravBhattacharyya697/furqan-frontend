import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const LeftHighlight = () => {
  return (
    <div className="top-banner-left">
      <span className="roundText">For Students</span>
      <h1>Discover Your Ideal <span className="gradientText">Career |</span></h1>
      <p>
        With Educationist.ai, get personalized career guidance to make informed
        decisions about your future
      </p>
      <div className="banner-part-buton">
        <button type="button" className="defaultButton">Start Exploring your Career</button>
        <div className="watchVideo"><span><PlayArrowIcon/></span> Watch Video</div>
      </div>
    </div>
  );
};

export default LeftHighlight;
