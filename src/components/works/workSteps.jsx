import React from "react";

const WorkSteps = ({ icon, title, text, index }) => {
  return (
    <div>
      <div>
        <img src={icon} alt={title} />
      </div>
      <div>{index}</div>
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};

export default WorkSteps;
