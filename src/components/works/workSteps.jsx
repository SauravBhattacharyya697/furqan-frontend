import React from "react";

const WorkSteps = ({ icon, title, text, index }) => {
  return (
    <div className="how-work-single">
      <div>
        <img src={icon} alt={title} />
      </div>
      <span className="staepNumber">{index}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default WorkSteps;
