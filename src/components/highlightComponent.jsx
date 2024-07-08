import React from "react";
import LeftHighlight from "./highlight/leftHighlight";
import RightHighlight from "./highlight/rightHighlight";
import BottomHighlight from "./highlight/bottomHighlight";

const HighlightComponent = () => {
  return (
    <div>
      <div>
        <LeftHighlight />
        <RightHighlight />
      </div>
      <BottomHighlight />
    </div>
  );
};

export default HighlightComponent;
