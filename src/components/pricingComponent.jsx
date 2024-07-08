import React from "react";
import Plan from "./pricing/plan";
import ExpertPlan from "./pricing/expertPlan";

const PricingComponent = () => {
  return (
    <div>
      <div>Plan and Pricing</div>
      <div>Flexible Pricing Plans</div>
      <div>
        Choose a plan that suits your needs and unlock the full potential of
        Educationist.ai
      </div>
      <div className="flex">
        <Plan
          title="Free Plan"
          subText="Free for beginners"
          displayPrice="₹0.00"
          originalPrice=""
          textOne="Basic career recommendations"
          textTwo="Limited access to tools"
          upcoming={false}
        />
        <Plan
          title="Pro Plan"
          subText="Most popular"
          displayPrice="₹1499"
          originalPrice="₹2000"
          textOne="Detailed career plans"
          textTwo="Skill mapping"
          upcoming={false}
        />
        <Plan
          title="Premium Plan"
          subText="Pro Featured"
          displayPrice="₹2499"
          originalPrice="₹3000"
          textOne="All Pro features"
          textTwo="Comprehensive psychometric tests"
          upcoming={true}
        />
      </div>
      <ExpertPlan
        title="Expert Plan"
        subText="Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque."
        displayPrice="₹4499"
        originalPrice="₹5000"
        textOne="All Premium features"
        textTwo="one-on-one sessions with a human expert career coach"
        upcoming={true}
      />
    </div>
  );
};

export default PricingComponent;
