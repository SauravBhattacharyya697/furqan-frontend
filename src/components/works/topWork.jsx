import React from "react";
import WorkSteps from "./workSteps";
import { ACCESS, EXPLORE, RECOMMEND, SIGNUP } from "../../utils/images";

const TopWork = () => {
  return (
    <div>
      <div>How it Works</div>
      <div>How it Works</div>
      <div className="flex">
        <WorkSteps
          icon={SIGNUP}
          title={"Sign Up"}
          text={
            "Create a free account and answer a few questions about yourself."
          }
          index={1}
        />
        <WorkSteps
          icon={RECOMMEND}
          title={"Get Recommendations"}
          text={
            "Our AI analyzes your responses and suggests tailored career options"
          }
          index={2}
        />
        <WorkSteps
          icon={EXPLORE}
          title={"Explore"}
          text={
            "Dive deeper into each option to understand the required skills and career prospects"
          }
          index={3}
        />
        <WorkSteps
          icon={ACCESS}
          title={"Unlock Full Access"}
          text={
            "Upgrade to explore comprehensive career plans and get expert advice."
          }
          index={4}
        />
      </div>
    </div>
  );
};

export default TopWork;
