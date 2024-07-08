import React from "react";

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
    <div>
      {upcoming && <div>Upcoming</div>}
      <div className="flex">
        <div>
          <div>{title}</div>
          <div>{subText}</div>
          <div>
            <div>{textOne}</div>
            <div>{textTwo}</div>
          </div>
        </div>
        <div>
          <div>
            <span>{displayPrice}</span>
            {originalPrice && <span>{originalPrice}</span>}
          </div>
          <div>
            <button type="button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPlan;
