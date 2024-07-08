import React from "react";
import { TestList } from "../utils/testList";
import { TESTS } from "../utils/images";

const TestComponent = () => {
  const midpoint = Math.ceil(TestList.length / 2);
  const firstHalf = TestList.slice(0, midpoint);
  const secondHalf = TestList.slice(midpoint);
  return (
    <div>
      <div>Coming Soon</div>
      <div>Comprehensive Psychometric Tests</div>
      <div>
        Our upcoming features will help you delve deeper into your career
        potential.
      </div>
      <div className="flex">
        <div>
          <div>
            We are developing a suite of psychometric tests designed by expert
            career psychometricians, based on recognized career theories.
          </div>
          <div>
            These tests will cover a wide range of areas including Orientation
            Style, Interests, Personality, Aptitudes, Emotional Quotient, and
            Cognitive Profiling.
          </div>
          <div className="flex">
            <ul>
              {firstHalf.length > 0 &&
                firstHalf.map((sentence, index) => (
                  <li key={index}>{sentence}</li>
                ))}
            </ul>
            <ul>
              {secondHalf.length > 0 &&
                secondHalf.map((sentence, index) => (
                  <li key={index}>{sentence}</li>
                ))}
            </ul>
          </div>
          <div>Stay Connected</div>
        </div>
        <div>
          <img src={TESTS} alt="tests" />
        </div>
      </div>
      <div>
        <div>Unlock Your Potential with Educationist.ai</div>
        <div className="flex">
          <button type="button">Sign Up</button>
          <button type="button">Book a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
