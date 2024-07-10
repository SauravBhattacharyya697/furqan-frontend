import React from "react";
import { FeatureContent } from "../../utils/featureContent";
import Feature from "./feature";
import { RIGHTARROW } from "../../utils/images";

const RightWork = () => {
  return (
    <div>
      <div className="main-header">
        <span className="roundText">Our Features</span>
        <h2>
          Unlock your true potential with the <span className="gradientText">AI powered Career Coach</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore
        </p>
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
        <button type="button" className="defaultButton">Learn More <img src={RIGHTARROW} alt="rightarrow" /></button>
      </div>
    </div>
  );
};

export default RightWork;
