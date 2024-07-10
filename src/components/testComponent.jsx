import React from "react";
import { TestList } from "../utils/testList";
import { TESTS } from "../utils/images";
import Container from '@mui/material/Container';
import { Grid} from '@mui/material';
export const GREENTICKICON = "/images/tick-green.png";

const TestComponent = () => {
  const midpoint = Math.ceil(TestList.length / 2);
  const firstHalf = TestList.slice(0, midpoint);
  const secondHalf = TestList.slice(midpoint);
  return (
    <div className="comprehensive-psychometric">
      <Container>
      <div className="main-header">
        <span className="shape-round-red">Coming Soon</span>
        <h2>Comprehensive Psychometric Tests</h2>
        <p>
          Our upcoming features will help you delve deeper into your career
          potential.</p>
      </div>
      <div className="compre-psycho-inner">
      <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={7}>
              <div className="metric-left">
                <p>
                  We are developing a suite of psychometric tests designed by expert
                  career psychometricians, based on recognized career theories.
                </p>
                <p>
                  These tests will cover a wide range of areas including Orientation
                  Style, Interests, Personality, Aptitudes, Emotional Quotient, and
                  Cognitive Profiling.
                </p>
                <div className="metric-left-list">
                  <ul>
                    {firstHalf.length > 0 &&
                      firstHalf.map((sentence, index) => (
                        <li key={index}><img src={GREENTICKICON} alt="green tick"/> {sentence}</li>
                      ))}
                  </ul>
                  <ul>
                    {secondHalf.length > 0 &&
                      secondHalf.map((sentence, index) => (
                        <li key={index}><img src={GREENTICKICON} alt="green tick"/> {sentence}</li>
                      ))}
                  </ul>
                </div>
                <button type="button" className="defaultButton">Stay Connected</button>
              </div>
              </Grid>
              <Grid item xs={12} md={6} xl={5}>
               <div className="metric-right">
                  <img src={TESTS} alt="tests" />
                </div>
              </Grid>
            </Grid>
      </div>
      <div className="potential-education">
        <h2>Unlock Your Potential with Educationist.ai</h2>
        <div className="potential-education-btns">
          <button type="button" className="defaultButton-White">Sign Up</button>
          <button type="button" className="defaultButton-White">Book a Demo</button>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default TestComponent;
