import React from "react";

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
    <div>
      {upcoming && <div>Upcoming</div>}
      <div>{title}</div>
      <div>{subText}</div>
      <div>
        <span>{displayPrice}</span>
        {originalPrice && <span>{originalPrice}</span>}
      </div>
      <div>
        <div>{textOne}</div>
        <div>{textTwo}</div>
      </div>
      <div>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default Plan;
