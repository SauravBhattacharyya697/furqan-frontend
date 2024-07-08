import React from "react";
import HeaderComponent from "./components/headerComponent";
import HighlightComponent from "./components/highlightComponent";
import WorkComponent from "./components/workComponent";
import TestimonialComponent from "./components/testimonialComponent";
import PricingComponent from "./components/pricingComponent";
import TestComponent from "./components/testComponent";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <HighlightComponent />
      <WorkComponent />
      <TestimonialComponent />
      <PricingComponent />
      <TestComponent />
    </div>
  );
};

export default App;
