import React from "react";
import { TICKICON } from "../../utils/images";


const ExpertPlan = ({
  title,
  subText,
  displayPrice,
  originalPrice,
  textOne,
  textTwo,
  upcoming,
}) => {
  return (
    <div className="plan-price-single">
      {upcoming && <span className="priceshape">Upcoming</span>}
      <div className="plan-price-single-box">
        <div className="bix-price-plan-left">
          <h3>{title}</h3>
          <p>{subText}</p>
          <ul>
            <li><img src={TICKICON} alt="tickicon" />{textOne}</li>
            <li><img src={TICKICON} alt="tickicon" />{textTwo}</li>
          </ul>
        </div>
        <div className="bix-price-plan-right">
          <div className="price-value">
            <h2>{displayPrice}</h2>
            {originalPrice && <s>{originalPrice}</s>}
          </div>
          <div>
            <button type="button" className="defaultButton">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPlan;
