import React from "react";
import TopWork from "./works/topWork";
import LeftWork from "./works/leftWork";
import RightWork from "./works/rightWork";

const WorkComponent = () => {
  return (
    <div>
      <TopWork />
      <div className="flex">
        <LeftWork />
        <RightWork />
      </div>
    </div>
  );
};

export default WorkComponent;
