import React from "react";
import WorkSteps from "./workSteps";
import Container from '@mui/material/Container';
import { ACCESS, EXPLORE, RECOMMEND, SIGNUP } from "../../utils/images";

const TopWork = () => {
  return (
    <div className="how-it-works">
      <Container>
      <div className="main-header">
        <span className="roundText">How it Works</span>
        <h2>How it <span className="gradientText">Works</span></h2>
      </div>
      <div className="how-work-inner">
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
      </Container>
    </div>
  );
};

export default TopWork;
