import React from "react";
import Plan from "./pricing/plan";
import ExpertPlan from "./pricing/expertPlan";

const PricingComponent = () => {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <Plan
          title=""
          subText=""
          displayPrice=""
          originalPrice=""
          textOne=""
          textTwo=""
          upcoming={false}
        />
        <Plan
          title=""
          subText=""
          displayPrice=""
          originalPrice=""
          textOne=""
          textTwo=""
          upcoming={false}
        />
        <Plan
          title=""
          subText=""
          displayPrice=""
          originalPrice=""
          textOne=""
          textTwo=""
          upcoming={true}
        />
      </div>
      <ExpertPlan
        title=""
        subText=""
        displayPrice=""
        originalPrice=""
        textOne=""
        textTwo=""
        upcoming={true}
      />
    </div>
  );
};

export default PricingComponent;
