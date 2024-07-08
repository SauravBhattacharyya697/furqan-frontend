import React from "react";
import { FeatureContent } from "../../utils/featureContent";
import Feature from "./feature";

const RightWork = () => {
  return (
    <div>
      <div>Our Features</div>
      <div>
        Unlock your true potential with the <span>AI powered Career Coach</span>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </div>
      <div>
        {FeatureContent.map((feature) => (
          <div key={feature.id}>
            <Feature
              imgSrc={feature.imgSrc}
              text={feature.text}
              title={feature.title}
            />
          </div>
        ))}
      </div>
      <div>
        <button type="button">Learn More</button>
      </div>
    </div>
  );
};

export default RightWork;
