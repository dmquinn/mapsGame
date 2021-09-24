import React from "react";

const ProgressBar = ({ kmCounter }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: `calc(${kmCounter}% / 15)` }}
        aria-valuenow=""
        aria-valuemin="0"
        aria-valuemax="1500"
      ></div>
    </div>
  );
};

export default ProgressBar;
