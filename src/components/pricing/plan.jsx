import React from "react";
import { TICKICON } from "../../utils/images";


const Plan = ({
  title,
  subText,
  displayPrice,
  originalPrice = null,
  textOne,
  textTwo,
  upcoming,
}) => {
  return (
    <div className="plan-price-single">
      {upcoming && <span className="priceshape">Upcoming</span>}
      <h3>{title}</h3>
      <span className="priceTagName">{subText}</span>
      <div className="price-value">
        <h2>{displayPrice}</h2>
        {originalPrice && <s>{originalPrice}</s>}
      </div>
      <ul>
        <li><img src={TICKICON} alt="tickicon" />{textOne}</li>
        <li><img src={TICKICON} alt="tickicon" />{textTwo}</li>
      </ul>
      <div>
        <button type="button" className="defaultButton">Get Started</button>
      </div>
    </div>
  );
};

export default Plan;
